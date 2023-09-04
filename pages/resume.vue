<script setup>
useHead({
  title: 'Resume',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <ol class="timeline-list">
        <!-- <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Resume
          </h4>
          <p class="timeline-item-desc">
           <a href="/my_resume.pdf" download=""  class="href">Download</a> 
          </p>
        </li> -->
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            RV College
          </h4>
          <span>02/2023 - Present</span>
          <p class="timeline-item-desc">
            Bangalore
          </p>
          <p class="timeline-text">
            M.Tech (Information Technology)
          </p>
        </li>
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Capgemini
          </h4>
          <span>10/2021 - 03/2023</span>
          <p class="timeline-item-desc">
            Hydrabad
          </p>
          <p class="timeline-text">
            Software Engineer
          </p>
        </li>
      </ol>
    </section>

    <section class="skill">
      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Your Skill
            </h5>
            <data value="80">80%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%;" />
          </div>
        </li>

      </ul>
    </section>
  </article>
</template>
