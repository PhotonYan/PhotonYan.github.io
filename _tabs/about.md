---
# the default layout is 'page'
icon: fas fa-user-graduate
order: 1
---

{% include about/styles.html %}

# Hi, I'm Shaoheng Yan (严绍恒) 👋

<div class="lead mb-4">
  {{ site.data.about.basic_info.lead }}
</div>

---

## 🔬 Research Interests
{% include about/cards.html %}

## 💼 Experience & Education
{% include about/timeline.html %}

## 📝 Publications
{% include about/publications.html %}

---

## 📚 Curriculum & Studies

> This section tracks my learning journey.
> *Note: Political courses, PE, and some general education courses are omitted.*
{: .prompt-info }

<!-- Interactive Demo -->
<div class="my-4">
    <iframe src="{{ site.baseurl }}/assets/html/demo.html" style="width:100%;height:600px;border:none;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.05);"></iframe>
</div>

### 🏃 Ongoing ({{ site.data.about.ongoing_studies_sem }})
{% include about/ongoing_studies.html %}

{% include about/course_archive.html %}

<details>
<summary class="h5 text-primary mt-3"><i class="fas fa-calendar-alt me-2"></i><strong>Future Plans (Curriculum)</strong></summary>
<div class="ps-3 pt-2">
<ul>
  {% for plan in site.data.about.future_plans %}
  <li>{{ plan }}</li>
  {% endfor %}
</ul>
</div>
</details>

---

## 📖 Book Projects (In Progress)
{% include about/books.html %}

---

## 🔗 Friends
{% include about/friends.html %}
