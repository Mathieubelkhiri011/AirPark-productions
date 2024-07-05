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
            <router-link :to="{ name: 'service', params: { service: 'cadrage' }}">Prise de vue</router-link>
            <ul v-if="showDropdownPriseVue" class="dropdown-menu">
              <li><router-link :to="{ name: 'service', params: { service: 'evenementiel' }}">Evenementiel</router-link></li>
              <li><router-link :to="{ name: 'service', params: { service: 'immobilier' }}">Immmobilier</router-link></li>
              <li><router-link :to="{ name: 'service', params: { service: 'documentaires' }}">Reportages / Documentaires</router-link></li>
              <li><router-link :to="{ name: 'service', params: { service: 'marketing' }}">Promotion / Marketing</router-link></li>
            </ul>
          </li>
          <li  class="nav-inspection" @mouseover="showDropdownInspection = true" @mouseleave="showDropdownInspection = false">
            <router-link :to="{ name: 'service', params: { service: 'inspection' }}">Inspection de bâtiments</router-link>
            <ul v-if="showDropdownInspection" class="dropdown-menu">
              <li><router-link :to="{ name: 'service', params: { service: 'particulier' }}">Particulier</router-link></li>
              <li><router-link :to="{ name: 'service', params: { service: 'professionnel' }}">Professionnel</router-link></li>
            </ul>
          </li>
          <li><router-link :to="{ name: 'service', params: { service: 'topographie' }}">Photogrammétrie</router-link></li>
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