<template>
  <div class="image-container">
    <img :src="homeWallpaper" alt="Large Image" class="responsive-image large-image">
    <img :src="bottomHomeWallpaper" alt="Small Image" class="small-image">
  </div>
  <div class="container">

    <div class="presentation">
        <div class="content-photo">
            <img :src="homeWallpaper" alt="Photo Thomas" class="photo">
        </div>
        <div class="content-description">
            <span>
                Je m'appelle Thomas, je suis originaire de l'Aude et passionné par la technologie des drones et par les possibilités infinies qu'ils offrent. Mes partenaires et moi-même mettons à votre disposition notre savoir-faire et notre matériel pour répondre à vos besoins spécifiques dans divers domaines, qu'il s'agisse de prises de vue aérienne, d'inspections de bâtiments ou de cartographie.
            </span>
        </div>
    </div>

    <Divider />

    <div id="about">
      <About />
    </div>

    <Divider />

    <div id="services">
      <Service />
    </div>
   </div>

    <div id="contact">
      <Contact />
    </div>

</template>

<script src="./Home.ts"/>
<style src="./Home.css"></style>