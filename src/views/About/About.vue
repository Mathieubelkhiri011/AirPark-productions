<template>
  <div class="about">
    <h1 class="about-title title w-100">Pourquoi nous choisir ?</h1>
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