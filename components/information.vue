<script setup lang="ts">
  // Odin, Njord, Tyr, Idun, Baldur
  const sections = [
    {
      title: 'about-us-goal-title',
      description: 'about-us-goal-desc',
    },
    {
      title: 'about-us-departments-title',
      description: 'about-us-departments-desc',
    },
    {
      title: 'about-us-odin-title',
      description: 'about-us-odin-desc',
    },
    // {
    //   title: 'about-us-njord-title',
    //   description: 'about-us-njord-desc',
    // },
    {
      title: 'about-us-tyr-title',
      description: 'about-us-tyr-desc',
    },
    {
      title: 'about-us-idun-title',
      description: 'about-us-idun-desc',
    },
    // {
    //   title: 'about-us-baldur-title',
    //   description: 'about-us-baldur-desc',
    // },
    {
      title: 'about-us-structure-title',
      description: 'about-us-structure-desc',
    }
  ]
</script>

<template>
  <v-container>
    <navigation-sub-back-menu />
    <h1>{{ $t('about-us-title') }}</h1>
    <v-row>
      <v-col
        v-for="(section, index) in sections"
        :key="`information-section-${index}`"
        cols="12"
        class="d-flex justfiy-center align-center"
      >
        <v-card class="text-white" color="background" variant="flat">
          <v-card-title :translate-key="section.title">{{ $t(section.title) }}:</v-card-title>
          <v-card-text :translate-key="section.description">{{ $t(section.description) }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .v-container {
    min-height: unset;
  }
</style>
