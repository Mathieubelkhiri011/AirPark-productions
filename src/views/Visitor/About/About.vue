<template>
  <div class="about">
    <span class="about-title title font-lighter w-100">À PROPOS DE NOUS ?</span>
    <section class="about-container">
      <article v-for="(item, index) in aboutImages" :key="index" class="about-content">
        <div v-if="index % 2 !== 0" class="description-image">
          <div v-html="item.description"></div>
        </div>
        <v-img :src="item.link" height="250" cover class="image" alt="Image" />
        <div v-if="index % 2 === 0" class="description-image">
          <div v-html="item.description"></div>
        </div>
      </article>
    </section>
  </div>
</template>

<script src="./About.js"/>
<style src="./About.css"></style>