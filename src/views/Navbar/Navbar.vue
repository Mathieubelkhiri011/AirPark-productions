<template>
  <div :class="navbarClass">
    <div class="container nav-menu">
      <div class="header-navbar">
        <div class="button-pi-bars">
          <i class="pi pi-bars" :class="this.showMobileMenu ? 'pi-bars-open-menu' : 'pi-bars-closed-menu'" @click="showMenu()"></i>
        </div>
        <div class="name" :class="this.showMobileMenu ? 'show-logo-header' : 'disable-logo-header'">
          <router-link to="/home">
            <img :src="logo" alt="Logo AirPark" class="logo" />
          </router-link>
        </div>
      </div>
      <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
        <div class="name" :class="this.showMobileMenu ? 'disable-logo-header' : 'show-logo-header'">
          <router-link to="/home">
            <img :src="logo" alt="Logo AirPark" class="logo" />
          </router-link>
        </div>
        <div class="content-nav-items">
        <ul class="nav-items">
          <li class="content-navbar-dropdown" @mouseleave="showDropdownPriseVue = false">
            <div class="title-content-nav">
              <router-link :to="{ name: 'service', params: { service: 'cadrage' }}">Prise de vue</router-link>
              <i class="pi pi-angle-down" @click="toggleDropdownPriseVue"></i>
            </div>
            <ul v-if="showDropdownPriseVue" class="dropdown-menu">
              <li><router-link :to="{ name: 'service', params: { service: 'evenementiel' }}">Evenementiel</router-link></li>
              <li><router-link :to="{ name: 'service', params: { service: 'immobilier' }}">Immmobilier</router-link></li>
              <li><router-link :to="{ name: 'service', params: { service: 'documentaires' }}">Reportages / Documentaires</router-link></li>
              <li><router-link :to="{ name: 'service', params: { service: 'marketing' }}">Promotion / Marketing</router-link></li>
            </ul>
          </li>
          <li  class="content-navbar-dropdown nav-inspection" @mouseleave="showDropdownInspection = false">
            <div class="title-content-nav">
              <router-link :to="{ name: 'service', params: { service: 'inspection' }}">Inspection de bâtiments</router-link>
              <i class="pi pi-angle-down" @click="toggleDropdownInspection"></i>
            </div>
            <ul v-if="showDropdownInspection" class="dropdown-menu">
              <li><router-link :to="{ name: 'service', params: { service: 'particulier' }}">Particulier</router-link></li>
              <li><router-link :to="{ name: 'service', params: { service: 'professionnel' }}">Professionnel</router-link></li>
            </ul>
          </li>
          <li class="topographie-nav"><router-link :to="{ name: 'service', params: { service: 'topographie' }}">Photogrammétrie</router-link></li>
        </ul>
        </div>
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