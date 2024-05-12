<template>
  <component
    :is="componentType"
    :to="to"
    class="dropdown-item"
    @click.stop="closeNav"
  >
    <slot></slot>
  </component>
</template>

<script src="./NavLink.ts"/>
<style src="./NavLink.css"></style>