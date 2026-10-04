(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const player = window.__fftPlayer;
  const scope = `fft-presenter:${location.pathname}`;
  const read = key => { try { return JSON.parse(sessionStorage.getItem(key)); } catch { return null; } };
  const write = (key, value) => { try { sessionStorage.setItem(key, JSON.stringify(value)); } catch {} };
  const forget = key => { try { sessionStorage.removeItem(key); } catch {} };
  const clockKey = `${scope}:clock`;
  const stored = read(clockKey);
  let clock = stored && Number.isFinite(stored.elapsed) && stored.elapsed >= 0
    && (stored.started === null || (Number.isFinite(stored.started) && stored.started > 0))
    ? stored : {elapsed: 0, started: null};
  const elapsed = () => clock.elapsed + (clock.started === null ? 0 : Math.max(0, Date.now() - clock.started));
  const format = milliseconds => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  };
  function paintClock() {
    $('timerValue').textContent = format(elapsed());
    const running = clock.started !== null;
    $('timerGroup').classList.toggle('running', running);
    $('timerToggle').textContent = running ? '暂停' : (clock.elapsed ? '继续' : '开始');
    $('timerToggle').setAttribute('aria-label', running ? '暂停计时' : '开始或继续计时');
    $('timerToggle').setAttribute('aria-pressed', String(running));
  }
  $('timerToggle').onclick = () => {
    clock = clock.started === null ? {elapsed: clock.elapsed, started: Date.now()} : {elapsed: elapsed(), started: null};
    write(clockKey, clock); paintClock();
  };
  $('timerReset').onclick = () => {clock = {elapsed: 0, started: null}; write(clockKey, clock); paintClock();};
  paintClock(); setInterval(paintClock, 250);

  const dialog = $('feedbackDialog');
  const input = $('feedbackMessage');
  let context = null, draft = null, draftKey = '', wasPlaying = false, heldVideo = null, saving = false;
  const freshId = () => crypto.randomUUID();
  function result(message, error = false) {
    $('feedbackResult').textContent = message;
    $('feedbackResult').classList.toggle('error', error);
  }
  function updateEntry() {
    $('feedback').disabled = player.pending;
    if (dialog.open && context && context.story_key !== player.slide.story_key) dialog.close();
  }
  window.addEventListener('fft-slidechange', updateEntry);
  updateEntry();
  $('feedback').onclick = () => {
    if (player.pending) return;
    const slide = player.slide;
    heldVideo = player.video;
    wasPlaying = !heldVideo.paused && !heldVideo.ended;
    heldVideo.pause();
    context = {
      page: player.index + 1, story_key: slide.story_key, title: slide.detail || slide.title,
      total: player.total, video_time: Number(heldVideo.currentTime.toFixed(3)), mode: player.mode,
      elapsed_ms: Math.round(elapsed()), url: location.href
    };
    draftKey = `${scope}:feedback:${slide.story_key}`;
    const previous = read(draftKey);
    draft = previous && typeof previous.message === 'string' && typeof previous.id === 'string'
      ? previous : {id: freshId(), message: ''};
    input.value = draft.message;
    $('feedbackContext').textContent = `第 ${context.page} / ${context.total} 页 · ${context.title}（${context.story_key}）\n动画 ${format(context.video_time * 1000)} · 放映用时 ${format(context.elapsed_ms)}`;
    $('feedbackContext').style.whiteSpace = 'pre-line';
    $('feedbackSave').disabled = !input.value.trim();
    $('feedbackCopy').disabled = !input.value.trim();
    result('');
    dialog.showModal(); input.focus();
  };
  input.addEventListener('input', () => {
    draft = {id: freshId(), message: input.value};
    write(draftKey, draft);
    $('feedbackSave').disabled = !input.value.trim();
    $('feedbackCopy').disabled = !input.value.trim();
    result('');
  });
  $('feedbackClose').onclick = () => dialog.close();
  dialog.addEventListener('cancel', event => {if (saving) event.preventDefault();});
  dialog.addEventListener('close', () => {
    if (wasPlaying && heldVideo === player.video && !player.pending && !heldVideo.ended) heldVideo.play().catch(() => {});
    $('feedback').focus();
  });
  function feedbackText() {
    return `FFT 精简版 · 本页反馈\n第 ${context.page}/${context.total} 页：${context.title}\n场景：${context.story_key} · ${context.mode === 'loop' ? '循环' : '主动画'} ${format(context.video_time * 1000)}\n放映用时：${format(context.elapsed_ms)}\n${context.url}\n\n${input.value.trim()}`;
  }
  $('feedbackCopy').onclick = async () => {
    const text = feedbackText();
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
      else {
        const area = document.createElement('textarea'); area.value = text; dialog.append(area); area.select();
        const copied = document.execCommand('copy'); area.remove();
        if (!copied) throw new Error('Clipboard unavailable');
      }
      result('已复制页码、动画位置和反馈，可直接粘贴到对话。');
    } catch {
      result('未能复制。你的文字仍在输入框中，可以手动复制；保存反馈也可继续使用。', true);
    }
  };
  $('feedbackForm').addEventListener('submit', async event => {
    event.preventDefault();
    if (saving || !input.value.trim()) return;
    const payload = {...context, id: draft.id, message: input.value.trim()};
    saving = true; input.disabled = true; $('feedbackClose').disabled = true;
    $('feedbackSave').disabled = true; $('feedbackCopy').disabled = true;
    result('正在保存…');
    const abort = new AbortController();
    const timeout = setTimeout(() => abort.abort(), 8000);
    let saved = false;
    try {
      const response = await fetch(new URL('api/feedback', location.href), {
        method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload), signal: abort.signal
      });
      if (!response.ok) throw new Error(`Save failed: ${response.status}`);
      const receipt = await response.json();
      if (receipt.id !== payload.id || receipt.saved !== true) throw new Error('Invalid receipt');
      saved = true; forget(draftKey);
      result('已保存到本地反馈箱。回到对话告诉我“看一下反馈”，我就能按这一页处理。');
    } catch {
      result('暂时无法保存，草稿已保留。可点“复制反馈”粘贴到对话，或稍后重试。', true);
    } finally {
      clearTimeout(timeout); saving = false; input.disabled = false; $('feedbackClose').disabled = false;
      $('feedbackSave').disabled = saved; $('feedbackCopy').disabled = false;
    }
  });
})();
