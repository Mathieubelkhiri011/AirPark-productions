<template>
  <div class="image-gallery">
    <span class="image-gallery-title title font-lighter">Galerie de photos</span>
    <div class="carousel">
      <v-carousel hide-delimiters
                  show-arrows="hover"
                  cycle :interval="10000">
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            cover
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script src="./Image-Gallery.js"/>
<style src="./Image-Gallery.css"></style>