<template>
  <div class="formulaire-contact">
    <TextFormField label="Nom" :value-text-field="mail.nom" v-model="mail.nom"></TextFormField>

    <TextFormField label="Email" :value-text-field="mail.address" v-model="mail.address"></TextFormField>

    <TextareaFormField label="Message" :value-textarea="mail.content" v-model="mail.content" class="message-field"></TextareaFormField>

    <ButtonOutline label="Envoyer" :loading="loading" @click="submitForm"></ButtonOutline>
  </div>
</template>

<script src="./FormContact.js" />
