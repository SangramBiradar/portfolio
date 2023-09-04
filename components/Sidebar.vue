<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/avatar.png" alt="Photo" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Agcrismanto Budhi Praswastyka">
          Sangram biradar
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span>Web Developer</span>
        </p>
      </div>
        <p class="title text-center xl:block flex items-center justify-center gap-1 " style="color: #fff;">
          <a href="/my_resume.pdf" download=""  class="href">Resume</a> 
        </p>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-twitter" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Twitter
            </p>

            <a href="https://twitter.com/its_me_sangram" class="contact-link" target="_blank">its_me_sangram</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Github
            </p>

            <a href="https://github.com/SangramBiradar" class="contact-link" target="_blank">SangramBiradar</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Linkedin
            </p>

            <a href="https://www.linkedin.com/in/sangrambiradar/" class="contact-link" target="_blank">sangrambiradar</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Location
            </p>

            <address>India</address>
          </div>
        </li>
      </ul>

      <div class="separator" />

      <ul class="social-list">
        <!-- <li class="social-item">
          <NuxtLink to="mailto:sangrambiradar1432@gmail.com" class="social-link" target="_blank">
            <ion-icon name="mail-outline" />
          </NuxtLink>
        </li> -->
        <LangSwitcher2 />
      </ul>
    </div>
  </aside>
</template>
