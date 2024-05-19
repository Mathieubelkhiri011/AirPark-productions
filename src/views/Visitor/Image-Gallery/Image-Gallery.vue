<template>
  <div class="image-gallery">
    <span class="image-gallery-title title font-lighter w-100">Galerie d'images</span>
    <div class="carousel">
      <v-carousel :show-arrows="false"
                  cycle :interval="10000">
        <v-carousel-item
            v-for="(image,i) in homeImages"
            :key="i"
            :src="image.link"
            cover
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script src="./Image-Gallery.js"/>
<style src="./Image-Gallery.css"></style>