<template>
  <button @click="handleLogout">Déconnexion</button>
  <br/>
  <div class="container-global-portal">
    <div class="container-portal">
      <v-sheet class="portal" :elevation="6">
        <v-btn @click="redirectToUrl('/home')"
               >
          Visite
          <v-icon icon="mdi-arrow-left" size="large"></v-icon>
        </v-btn>
      </v-sheet>

      <v-sheet class="portal" :elevation="6">
        <v-btn @click="redirectToUrl('/admin/config')"
        >
          Configuration
          <v-icon icon="mdi-arrow-right" size="large"></v-icon>
        </v-btn>
      </v-sheet>
    </div>
  </div>
</template>

<script src="./Portal.js"/>
<style src="./Portal.css"></style>