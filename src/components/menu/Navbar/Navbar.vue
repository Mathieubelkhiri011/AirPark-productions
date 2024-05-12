<template>
  <nav :class="classes" class="navbar">
    <div class="container">
      <div class="navbar-translate">
        <slot v-bind="slotData"></slot>
        <navbar-toggle-button
          :toggled="showMenu"
          @click.stop="toggle"
        ></navbar-toggle-button>
      </div>
      <div
        class="navbar-collapse collapse"
        v-click-outside="close"
        :style="menuImage ? `background: url(${menuImage}) 0% 0% / cover;` : ''"
        :class="[
      { show: showMenu },
      { 'has-image': menuImage },
      navMenuClasses
    ]"
        v-if="$slots['navbar-menu']"
        data-color="orange"
        id="navigation"
      >
        <slot name="before-menu"></slot>
        <ul class="navbar-nav" :class="menuClasses">
          <slot name="navbar-menu" v-bind="slotData"></slot>
        </ul>
        <slot name="after-menu"></slot>
      </div>
    </div>
  </nav>
</template>

<script src="Navbar.ts"/>
<style src="Navbar.css"></style>