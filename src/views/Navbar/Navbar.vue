<template>
  <div>
    <div class="nav-menu">
      <div class="button-pi-bars">
        <i class="pi pi-bars" :class="this.showMobileMenu ? 'pi-bars-open-menu' : 'pi-bars-closed-menu'" @click="showMenu()"></i>
      </div>
      <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
        <div class="name">AirPark-productions</div>
        <ul class="nav-items">
          <li>A propos</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <div class="socials-networks">
          <i class="pi pi-instagram"></i>
          <i class="pi pi-youtube"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Navbar.ts"/>
<style src="./Navbar.css"></style>