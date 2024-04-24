<script setup lang="ts">
</script>

<template>
  <v-row class="ma-0 flex-column fill-height" justify="center">
    <v-list>
      <v-list-item
        prepend-icon="empty"
      >
        <v-btn block rounded="lg" to="/" label="Home" :aria-label="$t('navigation-aria-home')">
          {{$t('navigation-home')}}
        </v-btn>
      </v-list-item>
      <v-list-item
        prepend-icon="empty"
      >
        <v-btn block rounded="lg" to="/information" :aria-label="$t('navigation-aria-about-us')">
          {{$t('navigation-about-us')}}
        </v-btn>
      </v-list-item>
      <v-list-item
        prepend-icon="empty"
      >
        <v-btn block rounded="lg" to="/articles" :aria-label="$t('navigation-aria-articles')">
          {{$t('navigation-articles')}}
        </v-btn>
      </v-list-item>
      <v-list-item
        prepend-icon="empty"
      >
        <v-btn color="primary" block rounded="lg" to="/information/join-us" :aria-label="$t('navigation-aria-join-us')">
          {{$t('navigation-join-us')}}
        </v-btn>
      </v-list-item>
    </v-list>
  </v-row>
</template>
