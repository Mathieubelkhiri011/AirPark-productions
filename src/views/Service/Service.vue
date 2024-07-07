<template>
  <div class="service">
    <h1 class="service-title title w-100">Une gamme de prestation de drone conçus pour vous</h1>
    <section class="service-container">
      <Card class="service-card">
        <template #header>
          <img class="img-card-service" alt="service image" :src="servicePriseDeVue.image" />
        </template>
        <template #title>{{ servicePriseDeVue.title }}</template>
        <template #content>
          {{ servicePriseDeVue.description }}
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <router-link class="link-button-contact" :to="servicePriseDeVue.urlRedirect">
              <span>Voir plus</span>
            </router-link>
          </div>
        </template>
      </Card>

      <Card class="service-card">
        <template #header>
          <img class="img-card-service" alt="service inspection" :src="serviceInspections.image" />
        </template>
        <template #title>{{ serviceInspections.title }}</template>
        <template #content>
          {{ serviceInspections.description }}
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <router-link class="link-button-contact" :to="serviceInspections.urlRedirect">
              <span>Voir plus</span>
            </router-link>
          </div>
        </template>
      </Card>

      <Card class="service-card">
        <template #header>
          <img class="img-card-service" alt="service cartographie" :src="serviceCartographie.image" />
        </template>
        <template #title>{{ serviceCartographie.title }}</template>
        <template #content>
          {{ serviceCartographie.description }}
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <router-link class="link-button-contact" :to="serviceCartographie.urlRedirect">
              <span>Voir plus</span>
            </router-link>
          </div>
        </template>
      </Card>

    </section>
  </div>
</template>

<script src="./Service.ts"/>
<style src="./Service.css"></style>