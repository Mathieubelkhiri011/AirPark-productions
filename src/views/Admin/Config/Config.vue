<template>
  <TabView>
    <TabPanel header="Configuration">
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </TabPanel>
    <TabPanel header="Ajout">
      <div class="container-form-add-global">
        <Card>
          <template #content>
            <div class="container-form-add">

              <TextFormField label="Titre" :value-text-field="newMedia.title" type="text" v-model="newMedia.title"/>

              <TextareaFormField label="Description" :value-textarea="newMedia.description" v-model="newMedia.description" class="message-field"></TextareaFormField>

              <SelectButton v-model="newMedia.methodImport" @change="changeMethodImport" :options="optionsMethodsImport" option-value="value" optionLabel="name" aria-labelledby="multiple" />

              <div v-if="newMedia.methodImport === METHOD_IMPORT.IMPORT_BASE">
                <FileUpload  name="media"
                             @select="onFileSelect"
                             choose-label="Sélectionner"
                             cancel-label="Annuler"
                             :show-upload-button="false"
                             :multiple="false"
                             :maxFileSize="100000000">
                  <template #empty>
                    <p>Glisser et déposer des fichiers ici pour les télécharger.</p>
                  </template>
                </FileUpload>
              </div>


              <div v-if="newMedia.methodImport === METHOD_IMPORT.IMPORT_URL">
                <TextFormField label="Entrez votre lien" :value-text-field="newMedia.link" type="text" v-model="newMedia.link"/>

                <div v-if="newMedia.link" class="video-preview">
                  <iframe :src="getEmbedUrl(newMedia.link)"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen>
                  </iframe>
                </div>
              </div>

              <Checkbox v-model="newMedia.status" :binary="true" />

              <ButtonOutline label="Ajouter" :loading="isLoading" @click="addMedia"></ButtonOutline>
            </div>
          </template>
        </Card>
      </div>
    </TabPanel>
  </TabView>

</template>

<script src="./Config.ts"/>
<style src="./Config.css"></style>