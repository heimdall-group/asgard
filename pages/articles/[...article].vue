<script setup lang="ts">
  const route = useRoute();
  const query = await queryContent(route.path).findOne()
</script>

<template>
  <articles-article :query="query" />
</template>
