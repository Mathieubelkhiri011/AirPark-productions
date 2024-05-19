<template>
  <section class="section-title-header">
    <span class="title-header font-lighter w-100">{{header.title}}</span>
  </section>
  <section class="section-image-header">
    <v-img :src="header.link" cover height="400" />
  </section>
  <section class="section-description-header">
      <span class="description-header w-50">{{header.description}}</span>
  </section>
</template>

<script src="./Header.js"/>
<style src="./Header.css"></style>