<script setup lang="ts">
  const props = defineProps({
    article: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <v-sheet
    class="ma-2"
    rounded
    border
    color="background"
    flat
  >
    <v-row class="ma-0">
      <v-col class="pa-0">
        <v-card-title class="text-white">{{article.title}}</v-card-title>
        <v-card-subtitle class="text-white mb-4">
          {{article.author}} |
          {{ article.date }}
        </v-card-subtitle>
      </v-col>
      <v-col cols="auto" class="pa-3 d-flex align-center">
        <v-btn
          color="secondary"
          :ripple="false"
          class="font-weight-bold"
          variant="text"
          :to="article._path"
        >
          {{$t('articles-read-more')}}
        </v-btn>
      </v-col>
    </v-row>
  </v-sheet>
</template>
