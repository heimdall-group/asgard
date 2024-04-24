<script setup lang="ts">
  const dialog = ref(false);
import { useLocale } from 'vuetify'

const { current } = useLocale()
function changeLocale (locale: string) {
  const cookie = useCookie('asgard-language')
  cookie.value = locale;
  current.value = locale
}
</script>

<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    min-width="300px"
    max-width="500px"
  >
    <template v-slot:activator = {props}>
      <v-btn block rounded="lg" @click="dialog = !dialog">
        {{$t('navigation-settings')}}
      </v-btn>
    </template>
    <v-card
      width="100%"
      class="pa-6"
      color="background"  
    >
      <v-select 
        variant="solo"
        menu-icon="fa-solid fa-chevron-down" 
        @update:modelValue="(value) => { changeLocale(value) }"
        :items="$i18n.availableLocales" :modelValue="$i18n.locale"
        >
      </v-select>
    </v-card>
  </v-dialog>
</template>
