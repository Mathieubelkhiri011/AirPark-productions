<template>
  <v-snackbar
    v-model="snackbar.show"
    :timeout="10000"
  >
    <div class="snackbar-content">
      <v-icon
        :color="snackbar.color"
        :icon="snackbar.icon"
      ></v-icon>
      {{ snackbar.text }}
    </div>

    <template v-slot:actions>
      <v-btn
        color="white"
        variant="text"
        @click="snackbar.show = false"
      >
        <i class="pi pi-times"></i>
      </v-btn>
    </template>
  </v-snackbar>

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
        v-model="mail.from"
        :rules="[required]"
        variant="outlined"
        density="compact"
        clearable
        :error="errors.from"
      />

      <v-text-field
        label="Téléphone"
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

    <div class="captcha-button">
        <Recaptcha
          siteKey="6LeAUf4pAAAAALaelr77mpzl2e2T8TtEKR9gZ97B"
          @verify="onCaptchaVerified"
        />
    </div>

    <ButtonOutline label="Envoyer" :loading="loading" @click="submitForm"></ButtonOutline>
  </div>
</template>

<script src="./FormContact.ts" />
<style src="./FormContact.css"></style>
