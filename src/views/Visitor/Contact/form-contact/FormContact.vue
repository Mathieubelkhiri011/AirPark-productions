<template>
  <div class="formulaire-contact">
    <TextFormField label="Email" :value-text-field="mail.from" type="text" v-model="mail.from"></TextFormField>

    <TextFormField label="Sujet" :value-text-field="mail.subject" type="text" v-model="mail.subject"></TextFormField>

    <TextareaFormField label="Message" :value-textarea="mail.body" v-model="mail.body" class="message-field"></TextareaFormField>

    <ButtonOutline label="Envoyer" :loading="loading" @click="send"></ButtonOutline>
  </div>
</template>

<script src="./FormContact.js" />
