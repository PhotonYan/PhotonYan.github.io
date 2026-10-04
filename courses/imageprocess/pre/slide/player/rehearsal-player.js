/* Whole pages play once; only explicitly selected scenes have manual stops. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const videos = [$('movie'), $('movieBuffer')];
  let index = 0, step = 0, visible = 0, serial = 0, pending = false;
  let continuous = false, advancing = false, frameRequest = null, aborter = null, stepCleanup = null;
  const blobs = new Map();
  const active = () => videos[visible];
  const parseHash = () => Math.max(0, Math.min(slides.length-1, (parseInt(location.hash.replace(/^#\/?/, ''),10)||1)-1));
  const points = () => slides[index].cues;
  const stepped = () => slides[index].playback === 'stepped';
  let blockedTarget=0;
  const endTime = video => Math.max(0, video.duration - 1/30);
  const event = (video, name, signal) => new Promise((resolve, reject) => {
    const clean = () => { video.removeEventListener(name, done);video.removeEventListener('error', failed);signal.removeEventListener('abort',cancel); };
    const done = () => {clean();resolve();};
    const failed = () => {clean();reject(new Error('Media failed'));};
    const cancel = () => {clean();reject(new DOMException('Cancelled','AbortError'));};
    video.addEventListener(name,done,{once:true});video.addEventListener('error',failed,{once:true});signal.addEventListener('abort',cancel,{once:true});
  });
  const paint = () => {
    $('pageNumber').textContent = String(index+1);
    $('topicLabel').textContent=slides[index].topic;
    document.querySelector('.stage').dataset.part=String(slides[index].part);
    $('pageNumber').setAttribute('aria-label',`第 ${index+1} 页`);
    $('stepNumber').textContent = stepped() && points().length>1 ? `${step+1} / ${points().length}` : '';
    $('status').textContent = slides[index].part_title || '';
    $('prev').disabled = index===0 && (!stepped() || step===0);
    $('next').disabled = index===slides.length-1 && (!stepped() || step===points().length-1);
    $('continuous').classList.toggle('active',continuous);
    $('continuous').setAttribute('aria-pressed',String(continuous));
  };
  function stopWatch() {
    stepCleanup?.();stepCleanup=null;
    if (frameRequest!==null) {
      active().cancelVideoFrameCallback?.(frameRequest);
      cancelAnimationFrame(frameRequest);frameRequest=null;
    }
    advancing=false;
  }
  async function seek(video,time,signal) {
    const target=Math.min(time,endTime(video));
    if (Math.abs(video.currentTime-target)>.0005) {
      const sought=event(video,'seeked',signal);video.currentTime=target;await sought;
    }
    await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
  }
  async function resource(src,signal) {
    if(blobs.has(src))return blobs.get(src);
    const response=await fetch(src,{signal});
    if(!response.ok){const error=new Error('Media unavailable');error.status=response.status;throw error;}
    const url=URL.createObjectURL(await response.blob());blobs.set(src,url);
    if(blobs.size>4){const [key,old]=blobs.entries().next().value;blobs.delete(key);URL.revokeObjectURL(old);}
    return url;
  }
  async function refreshSlides(signal,request) {
    // An already-open tab can still refer to a clip removed by a new release.
    const response=await fetch(new URL('index.html',document.baseURI),{signal,cache:'no-store'});
    if(!response.ok)return null;
    const documentCopy=new DOMParser().parseFromString(await response.text(),'text/html');
    const data=[...documentCopy.scripts].map(script=>script.textContent.match(/^const slides=(\[.*\]);$/s)).find(Boolean);
    if(!data)return null;
    const latest=JSON.parse(data[1]);
    if(!Array.isArray(latest)||!latest.length||!latest.every(slide=>
      typeof slide.story_key==='string'&&typeof slide.src==='string'&&Array.isArray(slide.cues)))return null;
    if(request!==serial||signal.aborted||JSON.stringify(latest)===JSON.stringify(slides))return null;
    const following=slides.slice(index).map(slide=>slide.story_key);
    const target=following.map(key=>latest.findIndex(slide=>slide.story_key===key)).find(i=>i>=0);
    slides.splice(0,slides.length,...latest);
    return target??Math.min(index,slides.length-1);
  }
  function updateLinks() {
    const layer=$('slideLinks');layer.replaceChildren();
    for(const link of (slides[index].links||[]).filter(l=>active().currentTime+1/30>=l.visible_after)){
      const a=document.createElement('a');a.href=link.url;a.target='_blank';a.rel='noopener noreferrer';a.title=link.label;
      const [x,y,w,h]=link.rect;Object.assign(a.style,{left:`${100*x}%`,top:`${100*y}%`,width:`${100*w}%`,height:`${100*h}%`});
      a.setAttribute('aria-label',link.label);layer.append(a);
    }
  }
  async function setSlide(requested,last=false,allowRefresh=true) {
    stopWatch();aborter?.abort();aborter=new AbortController();const signal=aborter.signal;
    const request=++serial;pending=true;active().pause();
    index=Math.max(0,Math.min(slides.length-1,requested));step=last?points().length-1:0;
    history.replaceState(null,'',`#/${index+1}`);$('drawer').classList.remove('open');paint();
    window.dispatchEvent(new Event('fft-slidechange'));
    const slot=1-visible,video=videos[slot];video.pause();video.loop=false;
    $('notice').classList.remove('show');$('start').classList.remove('show');
    try {
      const url=await resource(slides[index].src,signal);
      if(request!==serial)return;
      const loaded=event(video,'loadeddata',signal);video.src=url;video.dataset.source=slides[index].src;video.dataset.slideIndex=String(index);video.load();await loaded;
      await seek(video,last?points()[step]:0,signal);
      if(request!==serial)return;
      videos[visible].classList.remove('active');videos[visible].setAttribute('aria-hidden','true');
      visible=slot;video.classList.add('active');video.removeAttribute('aria-hidden');
      pending=false;video.pause();paint();updateLinks();
      window.dispatchEvent(new Event('fft-slidechange'));
      video.onended=()=>{if(continuous&&request===serial&&index<slides.length-1)setSlide(index+1);};
      if(!last){
        if(continuous||!stepped())await video.play().catch(()=>{$('start').classList.add('show');});
        else await playTo(step);
      }
    }catch(error){
      if(error.name==='AbortError'||request!==serial)return;
      if(allowRefresh&&(error.status===404||error.status===410)){
        try{
          const target=await refreshSlides(signal,request);
          if(target!==null&&request===serial)return setSlide(target,last,false);
        }catch(refreshError){if(refreshError.name==='AbortError'||request!==serial)return;}
      }
      if(request!==serial||signal.aborted)return;
      pending=false;$('notice').textContent='动画暂时无法播放，请点重播再试。';$('notice').classList.add('show');
      window.dispatchEvent(new Event('fft-slidechange'));
    }
  }
  async function advance() {
    if(pending)return;
    if(continuous||!stepped()){if(index<slides.length-1)setSlide(index+1);return;}
    if(advancing)return;
    if(step>=points().length-1){if(index<slides.length-1)setSlide(index+1);return;}
    return playTo(step+1);
  }
  async function playTo(nextStep) {
    advancing=true;blockedTarget=nextStep;
    const video=active(),request=serial,target=Math.min(points()[nextStep],endTime(video));
    let finished=false;
    const finish=async()=>{
      if(finished)return;finished=true;stepCleanup?.();stepCleanup=null;
      if(request!==serial)return;video.pause();frameRequest=null;
      await seek(video,target,aborter.signal).catch(()=>{});
      if(request!==serial)return;
      step=nextStep;advancing=false;paint();updateLinks();window.dispatchEvent(new Event('fft-stepchange'));
    };
    const ended=()=>finish();
    video.addEventListener('ended',ended,{once:true});
    stepCleanup=()=>video.removeEventListener('ended',ended);
    const watch=(now,info)=>{
      if(request!==serial||!advancing)return;
      const time=info?.mediaTime ?? video.currentTime;
      if(time>=target-1/60||video.ended){finish();return;}
      frameRequest=video.requestVideoFrameCallback?video.requestVideoFrameCallback(watch):requestAnimationFrame(watch);
    };
    frameRequest=video.requestVideoFrameCallback?video.requestVideoFrameCallback(watch):requestAnimationFrame(watch);
    try{await video.play();}catch{stopWatch();$('start').classList.add('show');}
  }
  async function previous() {
    if(pending)return;
    stopWatch();active().pause();
    if(stepped() && step>0){
      const request=serial;step--;
      try{await seek(active(),points()[step],aborter.signal);}catch(error){if(error.name==='AbortError')return;throw error;}
      if(request!==serial)return;
      paint();updateLinks();window.dispatchEvent(new Event('fft-stepchange'));
    }
    else if(index>0)setSlide(index-1,true);
  }
  function replay(){setSlide(index);}
  function toggleContinuous(){
    if(pending)return;
    stopWatch();continuous=!continuous;paint();
    if(continuous){if(active().ended&&index<slides.length-1)setSlide(index+1);else active().play().catch(()=>{});}
    else if(stepped()){
      const request=serial;active().pause();const match=points().findIndex(t=>t>=active().currentTime);step=match<0?points().length-1:match;
      seek(active(),points()[step],aborter.signal).then(()=>{if(request===serial)paint();}).catch(error=>{if(error.name!=='AbortError')throw error;});
    }
  }
  async function full(){try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{}}
  $('prev').onclick=previous;$('next').onclick=advance;$('replay').onclick=replay;
  $('startButton').onclick=()=>{$('start').classList.remove('show');if(stepped())playTo(blockedTarget);else active().play().catch(()=>{$('start').classList.add('show');});};
  $('continuous').onclick=toggleContinuous;$('full').onclick=full;$('close').onclick=()=>$('drawer').classList.remove('open');
  document.querySelector('.stage').addEventListener('click',e=>{if(!e.target.closest('button,a'))advance();});
  $('contents').onclick=()=>{
    $('drawerTitle').textContent='报告目录';$('drawerBody').replaceChildren();
    const grid=document.createElement('div');grid.className='chapter-grid';
    slides.forEach((slide,i)=>{const button=document.createElement('button');button.textContent=`${i+1}  ${slide.detail}`;button.onclick=()=>setSlide(i);grid.append(button);});
    $('drawerBody').append(grid);$('drawer').classList.add('open');
  };
  $('notes').onclick=()=>{
    $('drawerTitle').textContent=slides[index].detail;
    const note=document.createElement('p');note.className='notes';note.textContent=slides[index].notes;
    $('drawerBody').replaceChildren(note);$('drawer').classList.add('open');
  };
  window.addEventListener('hashchange',()=>setSlide(parseHash()));
  window.addEventListener('keydown',e=>{
    if(document.querySelector('dialog[open]')||e.target.matches?.('input,textarea,select')||(e.key===' '&&e.target.closest?.('button')))return;
    if(e.key==='Escape'){$('drawer').classList.remove('open');return;}
    if($('drawer').classList.contains('open'))return;
    if(e.key==='ArrowRight'||e.key===' '){e.preventDefault();advance();}
    else if(e.key==='ArrowLeft'){e.preventDefault();previous();}
    else if(e.key.toLowerCase()==='r')replay();else if(e.key.toLowerCase()==='f')full();
    else if(e.key.toLowerCase()==='n')$('notes').click();else if(e.key.toLowerCase()==='c')$('contents').click();
  });
  Object.defineProperty(window,'__fftPlayer',{value:{
    get index(){return index;},get step(){return step;},get cueCount(){return points().length;},
    get advancing(){return advancing;},get continuous(){return continuous;},get mode(){return 'intro';},
    get video(){return active();},get pending(){return pending;},get serial(){return serial;},
    get slide(){return slides[index];},get total(){return slides.length;},setSlide,advance,previous,replay,
  }});
  setSlide(parseHash());
})();
