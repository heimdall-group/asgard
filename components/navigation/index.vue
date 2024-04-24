<script setup lang="ts">
  const drawer = ref(false);
  const width = ref(0);
  const external_links = reactive([
    {
      icon: 'fa-brands fa-discord',
      key: 'navigation-our-discord',
      href: 'https://discord.com/invite/zs5humSzF7',
      label: 'Discord',
    },
    {
      icon: 'fa-brands fa-twitch',
      key: 'navigation-our-twitch',
      href: 'https://www.twitch.tv/asgardsverige',
      label: 'Twitch',
    },
    {
      icon: 'fa-brands fa-youtube',
      key: 'navigation-our-youtube',
      href: 'https://www.youtube.com/channel/UCSnHzDo2QJmOdnJ-z0taUgw',
      label: 'YouTube',
    },
    
    {
      icon: 'fa-brands fa-facebook',
      key: 'navigation-our-facebook',
      href: 'https://www.youtube.com/channel/UCSnHzDo2QJmOdnJ-z0taUgw',
      label: 'Facebook',
    },
  ])

  onMounted(() => {
    width.value = window.innerWidth;
    window.addEventListener('resize', () => {
      width.value = window.innerWidth;
    });
  });
</script>

<template>
    <v-app-bar rounded="lg" color="background">
      <v-btn
        rounded="lg"
        @click="drawer = !drawer"
      >
        <font-awesome-icon icon="fa-solid fa-bars"></font-awesome-icon>
      </v-btn>
      <v-app-bar-title>{{$t('navigation-title')}}</v-app-bar-title>
      <template v-if="width > 600" v-slot:append>
        <v-btn
          color="primary"
          rounded="xl"
          variant="flat"
          class="mr-2"
          to="/information/join-us"
        >
          {{$t('navigation-join-us')}}
        </v-btn>
      </template>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      disable-route-watcher
      disable-resize-watcher
    >
      <navigation-row />
      <template v-slot:append>
        <navigation-append :links="external_links" />
      </template>
    </v-navigation-drawer>
</template>

<style>
  .v-navigation-drawer {
    background: rgba(var(--v-theme-background), 0.9);
  }

  .v-icon.fa-solid {
    font-size: 23px;
    width: 24px;
  }

  .v-list-item.ma-2 .v-icon.fa-solid {
    margin-left: -8px !important;
  }

  .fa-discord {
    font-size: 22px;
    margin-left: -2px;
    width: 24px;
  }

  .fa-youtube {
    font-size: 22px;
    width: 24px;
  }
</style>
