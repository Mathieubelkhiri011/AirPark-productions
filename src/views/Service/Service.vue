<template>
  <div class="service">
    <h1 class="service-title title font-lighter w-100">Une gamme de prestation de drone conçus pour vous</h1>
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
          <img class="img-card-service" alt="service image" :src="serviceImage.image" />
        </template>
        <template #title>{{ serviceImage.title }}</template>
        <template #content>
          {{ serviceImage.description }}
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Voir plus" class="w-full" />
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
            <Button label="Voir plus" class="w-full" />
          </div>
        </template>
      </Card>

      <Card class="service-card">
        <template #header>
          <img class="img-card-service" alt="service custom" :src="serviceCustom.image" />
        </template>
        <template #title>{{ serviceCustom.title }}</template>
        <template #content>
          {{ serviceCustom.description }}
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Voir plus" class="w-full" />
          </div>
        </template>
      </Card>

      <Card class="service-card">
        <template #header>
          <img class="img-card-service" alt="service othen" :src="serviceImage.image" />
        </template>
        <template #title>{{ serviceImage.title }}</template>
        <template #content>
          {{ serviceImage.description }}
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Voir plus" class="w-full" />
          </div>
        </template>
      </Card>

    </section>
  </div>
</template>

<script src="./Service.ts"/>
<style src="./Service.css"></style>