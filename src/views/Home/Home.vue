<template>
  <div class="image-container">
    <img class="responsive-image" :src="homeWallpaper" alt="image d'accueil">
  </div>
  <div class="container">
    <div id="about">
      <About />
    </div>


    <div id="contact">
      <Contact />
    </div>
  </div>
</template>

<script src="./Home.js"/>
<style src="./Home.css"></style>