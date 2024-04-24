<script setup lang="ts">
  const props = defineProps({
    query: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <v-container>
    <navigation-sub-back-menu />
    <v-img v-if="query.image" :src="query.image" rounded />
    <template v-else>No image</template>
    <h1>{{ query.title }}</h1>
    <v-card-text>{{ query.description }}</v-card-text>
    <v-card-subtitle class="text-white mb-4">
      {{ query.author}} |
      {{ query.date }}
    </v-card-subtitle>
    <content-renderer class="pt-8" :value="query">
      <template #empty>
        <articles-empty />
      </template>
    </content-renderer>
    <v-row class="ma-0" justify="end">
      <v-col cols="auto">
        <v-card-subtitle class="text-white mt-4">
          {{ query.author}} |
          {{ query.date }}
        </v-card-subtitle>
      </v-col>
    </v-row>
  </v-container>
</template>
