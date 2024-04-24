<template>
  <v-app>
    <navigation />
      <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<style>
    @import url(~/assets/css/fonts.css);

  * {
    font-family: 'Quicksand';
    text-transform: unset !important;
  }

  h1, h2, h3, h4, h5 {
    font-weight: 400;
  }

  .v-application {
    min-height: calc(100vh + 192px);
  }

  .v-application .v-main {
    padding-top: 64px;
  }

  .v-application .v-main > .v-container {
    min-height: calc(100vh - 64px);
  }

  .v-container {
    overflow-x: hidden;
  }

  .v-sheet.bg-background.v-sheet--border {
    /* border-color: rgba(var(--v-theme-border-color)); */
    border-color: rgba(var(--v-theme-surface));
    border-width: 1px;
  }

  .v-footer {
    height: calc(192px) !important;
  }

  .v-btn[class^='font-weight-'] .v-btn__content {
    font-weight: 400;
  }

  html {
    touch-action: manipulation;
    /* overflow-y: auto; */
    width: 100vw;
  }

  .v-overlay__scrim {
    background: rgb(var(--v-theme-background));
    opacity: 0.7;
  }

    /* Scroll */

  *::-webkit-scrollbar-button {
    display: none;
  }

  *::-webkit-scrollbar {
    width: 9px;
    height: 9px;
    background: transparent;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
    width: 9px;
  }

  *::-webkit-scrollbar-thumb {
    background: #424242;
    border-radius: 7px;
    width: 7px;
    border: 1px solid transparent;
  }
</style>
