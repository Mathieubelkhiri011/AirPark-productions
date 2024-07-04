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
          <li @mouseover="showDropdownPriseVue = true" @mouseleave="showDropdownPriseVue = false">
            <span>Prise de vue</span>
            <ul v-if="showDropdownPriseVue" class="dropdown-menu">
              <li><router-link :to="{ name: 'service', params: { service: 'inspection' }}">Evenementiel</router-link></li>
              <li><router-link :to="{ name: 'service', params: { service: 'immmobilier' }}">Immmobilier</router-link></li>
              <li><router-link :to="{ name: 'service', params: { service: 'reportages-documentaires' }}">Reportages / Documentaires</router-link></li>
              <li><router-link :to="{ name: 'service', params: { service: 'promotion-marketing' }}">Promotion / Marketing</router-link></li>
            </ul>
          </li>
          <li  class="nav-inspection" @mouseover="showDropdownInspection = true" @mouseleave="showDropdownInspection = false">
            <span>Inspection de bâtiments</span>
            <ul v-if="showDropdownInspection" class="dropdown-menu">
              <li><router-link :to="{ name: 'service', params: { service: 'particulier' }}">Particulier</router-link></li>
              <li><router-link :to="{ name: 'service', params: { service: 'professionnel' }}">Professionnel</router-link></li>
            </ul>
          </li>
          <li @mouseover="showDropdownPhotogrammetrie = true" @mouseleave="showDropdownPhotogrammetrie = false">
            <span>Photogrammétrie</span>
            <ul v-if="showDropdownPhotogrammetrie" class="dropdown-menu">
              <li><router-link :to="{ name: 'service', params: { service: 'topographie-cartographie' }}">Topographie / Cartographie</router-link></li>
            </ul>
          </li>
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