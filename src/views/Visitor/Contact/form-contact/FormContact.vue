<template>
  <div class="formulaire-contact">
    <TextField label="Email" :value-text-field="mail.from" type="text" v-model="mail.from"></TextField>

    <TextField label="Sujet" :value-text-field="mail.subject" type="text" v-model="mail.subject"></TextField>

    <TextareaField label="Message" :value-textarea="mail.body" v-model="mail.body" class="message-field"></TextareaField>

    <ButtonOutline label="Envoyer" :loading="loading" @click="send"></ButtonOutline>
  </div>
</template>

<script src="./FormContact.js" />
