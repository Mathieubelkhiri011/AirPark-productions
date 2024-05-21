<template>
  <div class="formulaire-contact">
    <v-select
      label="Type de service *"
      v-model="mail.type"
      :items="['Photo', 'Vidéo', 'Inspection', 'Personnalisation']"
      :rules="[required]"
      variant="outlined"
      density="compact"
      clearable
      :error="errors.type"
    />

    <div class="form-identity">
      <v-text-field
        label="Prénom *"
        v-model="mail.firstname"
        :rules="[required]"
        variant="outlined"
        density="compact"
        clearable
        :error="errors.firstname"
      />

      <v-text-field
        label="Nom *"
        v-model="mail.lastname"
        :rules="[required]"
        variant="outlined"
        density="compact"
        clearable
        :error="errors.lastname"
      />
    </div>

    <div class="form-info">
      <v-text-field
        label="Mail *"
        v-model="mail.email"
        :rules="[required]"
        variant="outlined"
        density="compact"
        clearable
        :error="errors.email"
      />

      <v-text-field
        label="Téléphone *"
        v-model="mail.phone"
        :rules="[required]"
        variant="outlined"
        density="compact"
        clearable
        :error="errors.phone"
      />
    </div>

    <v-textarea
      label="Message *"
      v-model="mail.body"
      :rules="[required]"
      variant="outlined"
      density="compact"
      :error="errors.body"
    />

    <ButtonOutline label="Envoyer" :loading="loading" @click="submitForm"></ButtonOutline>
  </div>

  <v-snackbar
    v-model="snackbar.show"
    :timeout="2000"
  >
    <v-icon
      :color="snackbar.color"
      :icon="snackbar.icon"
    ></v-icon>
    {{ snackbar.text }}

    <template v-slot:actions>
      <v-btn
        color="white"
        variant="text"
        @click="snackbar.show = false"
      >
        Fermer
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script src="./FormContact.ts" />
<style src="./FormContact.css"></style>
