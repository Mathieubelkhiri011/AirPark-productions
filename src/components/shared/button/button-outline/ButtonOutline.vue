<template>
  <v-btn
      :loading="loading"
      :class="customClass ?? 'flex-grow-1 w-100'"
      height="48"
      variant="outlined"
      rounded="0"
  >
    {{ label }}
  </v-btn>
</template>

<script src="./ButtonOutline.ts"/>