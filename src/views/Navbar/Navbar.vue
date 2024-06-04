<template>
  <div :class="navbarClass">
    <div class="container nav-menu">
      <div class="button-pi-bars">
        <i class="pi pi-bars" :class="this.showMobileMenu ? 'pi-bars-open-menu' : 'pi-bars-closed-menu'" @click="showMenu()"></i>
      </div>
      <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
        <div class="name">
          <router-link to="/home">
            <img :src="logo" alt="Logo AirPark" class="logo" />
          </router-link>
        </div>
        <ul class="nav-items">
          <li><router-link :to="{ name: 'service', params: { service: 'prise-vue' }}">Prise de vue</router-link></li>
          <li><router-link :to="{ name: 'service', params: { service: 'inspection' }}">Inspection</router-link></li>
        </ul>
        <div class="navbar-contact">
          <router-link class="link-button-contact" to="/contact">
            <span>Contactez-nous</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Navbar.ts"/>
<style src="./Navbar.css"></style>