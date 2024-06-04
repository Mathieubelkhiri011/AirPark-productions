<template>
  <div class="service">
    <h1 class="service-title title w-100">Une gamme de prestation de drone conçus pour vous</h1>
    <section class="presentation-container">
      <div class="presentation-content">
      <span class="presentation">
        Chez AirPark-productions, nous nous engageons à fournir des services de drone de la plus haute qualité qui répondent à vos besoins uniques. De l’inspection minutieuse à la thermographie, en passant par la photogrammétrie, la prise de vue et le Time lapse pour les chantiers, nos services sont conçus pour vous offrir les informations précises et en temps réel dont vous avez besoin pour prendre les bonnes décisions.
      </span>
      </div>
    </section>
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

    </section>
  </div>
</template>

<script src="./Service.ts"/>
<style src="./Service.css"></style>