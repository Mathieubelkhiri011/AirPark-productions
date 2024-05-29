<template>
  <div :class="navbarClass">
    <div class="container nav-menu">
      <div class="button-pi-bars">
        <i class="pi pi-bars" :class="this.showMobileMenu ? 'pi-bars-open-menu' : 'pi-bars-closed-menu'" @click="showMenu()"></i>
      </div>
      <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
        <div class="name">
          <router-link to="/home">
            AirPark-productions
          </router-link>
        </div>
        <ul class="nav-items">
          <li><router-link to="/home">Prise de vue</router-link></li>
          <li><router-link to="/home">Photogrammétrie</router-link></li>
          <li><router-link to="/home">Inspection</router-link></li>
          <li><router-link to="/home">Thermographie</router-link></li>
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