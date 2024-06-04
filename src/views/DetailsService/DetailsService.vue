<template>
  <div class="image-container">
    <img :src="service.image" alt="Large Image" class="responsive-image large-image">
    <img :src="bottomHomeWallpaper" alt="Small Image" class="small-image">
  </div>
  <div class="container">
    <div class="details-service">
      <h1 class="about-title title w-100"> {{ service.title }}</h1>
      <section class="presentation-container">
        <div class="presentation-content">
          <span class="presentation">
            {{ service.description }}
          </span>
        </div>
      </section>

      <section class="infos-details">
         <Card class="infos-details-card" v-for="details in service.details">
             <template #title>
                {{ details.title }}
             </template>
             <template #content>
                {{ details.description }}
             </template>
             <template #footer v-if="details.button">
               <div class="flex gap-3 mt-1">
                 <router-link class="link-button-contact" :to="details.button">
                   <span>Voir plus</span>
                 </router-link>
               </div>
             </template>
           </Card>
      </section>
    </div>
   </div>
</template>

<script src="./DetailsService.ts"/>
<style src="./DetailsService.css"></style>