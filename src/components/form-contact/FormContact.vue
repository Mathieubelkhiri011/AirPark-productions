<template>
  <div>
    <v-text-field
        density="compact"
        label="Nom"
        variant="outlined"
        rounded="0"
        v-model="mail.nom"
    ></v-text-field>

    <v-text-field
        density="compact"
        label="Email *"
        variant="outlined"
        rounded="0"
        v-model="mail.address"
        :rules="[rules.required]"
    ></v-text-field>

    <v-textarea
        density="compact"
        label="Message"
        variant="outlined"
        rounded="0"
        v-model="mail.content"
    ></v-textarea>

    <v-btn
        :loading="loading"
        class="flex-grow-1 w-100"
        height="48"
        variant="outlined"
        rounded="0"
        @click="loading = !loading"
    >
      Send email
    </v-btn>
  </div>
</template>


<script src='./FormContact.js'/>