<template>
  <div class="image-container">
    <img :src="service.image" alt="Large Image" class="responsive-image large-image">
    <img :src="bottomHomeWallpaper" alt="Small Image" class="small-image">
  </div>
  <div class="container">
    <div class="details-service">
      <h1 v-if="service.title" class="about-title title w-100"> {{ service.title }}</h1>
      <section class="presentation-container">
        <div class="presentation-content">
          <span class="presentation">
             <div v-html="service.description"></div>
          </span>
        </div>
      </section>

      <section class="infos-details">
         <Card class="infos-details-card" v-for="detail in service.details">
            <template #header>
              <img class="img-card-service" alt="service image" :src="detail.image" />
            </template>
             <template #title>
                {{ detail.title }}
             </template>
             <template #content>
                <div v-html="detail.description"></div>
             </template>
             <template #footer v-if="detail.button">
               <div class="flex gap-3 mt-1">
                 <router-link class="link-button-contact" :to="detail.button">
                   <span>Voir plus</span>
                 </router-link>
               </div>
             </template>
           </Card>
      </section>
    </div>
  </div>
  <div>
     <Contact />
  </div>
</template>

<script src="./DetailsService.ts"/>
<style src="./DetailsService.css"></style>