<template>
  <div class="image-container">
    <img :src="homeWallpaper" alt="Large Image" class="responsive-image large-image">
    <img :src="bottomHomeWallpaper" alt="Small Image" class="small-image">
  </div>
  <div class="container">

    <div id="about">
      <About />
    </div>

    <Divider />

    <div id="services">
      <Service />
    </div>

    <Divider />

    <div id="contact">
      <Contact />
    </div>

  </div>
</template>

<script src="./Home.ts"/>
<style src="./Home.css"></style>