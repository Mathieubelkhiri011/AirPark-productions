<template>
  <v-btn class="return-button" icon="mdi-arrow-left" size="large" @click="redirectToUrl('/admin/portal')"></v-btn>
  <Header></Header>
  <div class="container">
    <About></About>
    <VideoGallery></VideoGallery>
    <ImageGallery></ImageGallery>
    <Contact></Contact>
  </div>
  <div class="footer-content">
    <Footer></Footer>
  </div>
</template>

<script src="./Home.js"/>
<style src="./Home.css"></style>