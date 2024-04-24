<script setup lang="ts">
  import type { QueryBuilderParams } from '@nuxt/content/types';
  const query: Ref<QueryBuilderParams> = ref({
    path: '/articles',
    sort: [{ date: -1 }]
  })
</script>

<template>
  <v-container>
    <navigation-sub-back-menu :name="$t('article-navigation-title')" />
    <ContentList :query="query" path="/articles">
      <template v-slot="{ list }">
        <v-col v-for="article in list" :key="article._path" cols="12">
          <articles-list-item :article="article" />
        </v-col>
      </template>
      <template #empty>
        <articles-empty />
      </template>
      <template #not-found>
        <articles-not-found />
      </template>
    </ContentList>
  </v-container>
</template>
