<template>
  <div class="about">
    <h1 class="about-title title font-lighter w-100">NOS SERVICES</h1>
    <section class="presentation-container">
      <div class="presentation-content">
      <span class="presentation">
        According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent this year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.
      </span>
      </div>
    </section>
    <section class="service-container">
      <article class="service-image-content">
        <v-img :src="serviceImage.image" cover class="image" alt="Image" />
        <div class="service-sub-content">
          <span class="service-title"> {{serviceImage.title}} </span>
          <span class="service-description">{{ serviceImage.description }}</span>
          <a href="#contact"><Button class="service-button" label="Contacter"/></a>
        </div>
      </article>


      <article class="service-inspection-content">
        <v-img :src="serviceInspections.image" cover class="image" alt="Image" />
        <div class="service-sub-content">
          <span class="service-title"> {{serviceInspections.title}} </span>
          <span class="service-description">{{ serviceInspections.description }}</span>
          <a href="#contact"><Button class="service-button" label="Contacter"/></a>
        </div>
      </article>


      <article class="service-custom-content">
        <v-img :src="serviceCustom.image" cover class="image" alt="Image" />
        <div class="service-sub-content">
          <span class="service-title"> {{serviceCustom.title}} </span>
          <span class="service-description">{{ serviceCustom.description }}</span>
          <a href="#contact"><Button class="service-button" label="Contacter"/></a>
        </div>
      </article>

    </section>
  </div>
</template>

<script src="./Service.js"/>
<style src="./Service.css"></style>