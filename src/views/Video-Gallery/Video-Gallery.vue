<template>
  <div class="image-gallery">
    <span class="image-gallery-title title font-lighter w-100">Galerie de vidéos</span>
    <div class="carousel">
      <v-carousel :show-arrows="false">
      <v-carousel-item v-for="(video, index) in videos" :key="index">
        <iframe width="1050" height="450"
                :src="getEmbedUrl(video.link)"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
        </iframe>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script src="./Video-Gallery.js"/>
<style src="./Video-Gallery.css"></style>