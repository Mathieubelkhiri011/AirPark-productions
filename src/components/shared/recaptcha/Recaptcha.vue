<template>
  <div>
    <div class="g-recaptcha" :data-sitekey="siteKey" @verify="onCaptchaVerified"></div>
  </div>
</template>

<script src="./Recaptcha.ts" />