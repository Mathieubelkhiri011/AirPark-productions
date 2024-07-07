<template>
    <div class="contact-global">
  <div class="container contact">
    <div class="side-info-contact">
      <div class="info">
        <div class="info-content">
          <div>
            <h1>Discutons</h1>
            <span>Vous souhaitez nous transmettre votre projet?</span>
            <span>Vous avez des questions, des commentaires ou des demandes particulières?</span>
            <span>N'hésitez pas à nous contacter, nous serons ravis de vous aider.</span>
          </div>
          <a class="contact-email" href="mailto:airpark.productions@gmail.com">
            <span>
              airpark.productions@gmail.com
            </span>
          </a>
          <div class="social-network">
            <a href="https://www.instagram.com/thomas.airpark" target="_blank"><i class="pi pi-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61554337980241" target="_blank"><i class="pi pi-facebook"></i></a>
            <a href="https://www.youtube.com/channel/UCBaGAiSQTv8i9vyPQZb09WQ" target="_blank"><i class="pi pi-youtube"></i></a>
            <a href="https://www.tiktok.com/@thomas.airpark" onclick="window.open(this.href, '_blank', 'width=800,height=600'); return false;"><i class="pi pi-tiktok"></i></a>
          </div>
        </div>
      </div>
    </div>

    <div class="side-formulaire-contact">
      <FormContact></FormContact>
    </div>
  </div>
  </div>
</template>

<script src="./Contact.ts"/>
<style src="./Contact.css"></style>