<template>
  <div class="about">
    <h1 class="about-title title w-100">Pourquoi nous choisir ?</h1>
    <section class="presentation-container">
      <div class="presentation-content">
      <span class="presentation">
        Bienvenue chez AirPark-productions, votre entreprise de référence pour les services de drone en France. Spécialisée dans l’inspection par drone, la thermographie aérienne, la photogrammétrie et les solutions Time lapse pour les chantiers, notre équipe d’experts dédiés s’engage à vous fournir un service de haute qualité pour répondre à vos besoins spécifiques.
      </span>
      </div>
    </section>
    <section class="service-container">
      <article class="service-image-content">
        <v-img :src="expertise.image" cover class="image" alt="Image" />
        <div class="service-sub-content">
          <span class="service-title"> {{expertise.title}} </span>
          <span class="service-description">{{ expertise.description }}</span>
        </div>
      </article>


      <article class="service-inspection-content">
        <v-img :src="custom.image" cover class="image img-inspection" alt="Image" />
        <div class="service-sub-content inspection">
          <span class="service-title"> {{custom.title}} </span>
          <span class="service-description">{{ custom.description }}</span>
        </div>
      </article>


      <article class="service-custom-content">
        <v-img :src="security.image" cover class="image" alt="Image" />
        <div class="service-sub-content">
          <span class="service-title"> {{security.title}} </span>
          <span class="service-description">{{ security.description }}</span>
        </div>
      </article>

    </section>
  </div>
</template>

<script src="./About.ts"/>
<style src="./About.css"></style>