<template>
  <v-text-field
      density="compact"
      :append-icon="type === 'password' ? (show1 ? 'mdi-eye' : 'mdi-eye-off') : null"
      :label="label"
      :type="type === 'password' ? (show1 ? 'text' : 'password') : 'text'"
      variant="outlined"
      rounded="0"
      :value="valueTextField"
  ></v-text-field>
</template>

<script src="./text-field.js" />