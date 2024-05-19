<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

