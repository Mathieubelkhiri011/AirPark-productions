<template>
  <div class="navbar">
    <div class="container nav-menu">
      <div class="button-pi-bars">
        <i class="pi pi-bars" :class="this.showMobileMenu ? 'pi-bars-open-menu' : 'pi-bars-closed-menu'" @click="showMenu()"></i>
      </div>
      <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
        <div class="name">AirPark-productions</div>
        <ul class="nav-items">
          <li>Accueil</li>
          <li><a href="#about">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="socials-networks">
          <li><a href="#contact">Contactez-nous</a></li>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Navbar.ts"/>
<style src="./Navbar.css"></style>