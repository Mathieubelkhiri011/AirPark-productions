<template>
  <button
    type="button"
    class="navbar-toggler"
    :class="[{ toggled: toggled }, { collapsed: !toggled }]"
    data-toggle="collapse"
    data-target="#navbar"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-bar top-bar"></span>
    <span class="navbar-toggler-bar middle-bar"></span>
    <span class="navbar-toggler-bar bottom-bar"></span>
  </button>
</template>

<script src="./NavbarToggleButton.ts"/>
<style src="./NavbarToggleButton.css"></style>