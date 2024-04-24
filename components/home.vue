<script setup lang="ts">
  import type { QueryBuilderParams } from '@nuxt/content/types';
  import { useLocale } from 'vuetify'

  const { current } = useLocale()
  function changeLocale (event: Event) {
    (event.target as HTMLElement).closest('button')?.blur()
    let locale = '';
    const cookie = useCookie('asgard-language');
    if (!cookie) {
      return
    }
    if (cookie.value === 'sv') {

    }
    switch(cookie.value) {
      case 'sv':
        locale = 'en'
        break;
      case 'en':
        locale = 'sv'
        break;
      default:
        locale = 'en'
        break;
    }
    cookie.value = locale;
    current.value = locale
  }

  const articles: QueryBuilderParams = {
    path: '/articles',
    sort: [{ date: -1 }],
    limit: 5,
  }

  const sections = [
    {
      title: 'Mining',
      description: '',
    },
  ]
</script>

<template>
  <v-container class="pa-0" fluid>
    <section>
      <v-parallax src="/image/16x9/banner.webp" height="100%">
        <v-row class="ma-0 h-100" justify="center" align="center">
          <v-card
            color="transparent"
            flat
          >
            <v-row class="ma-0" justify="center">
              <v-img
                :width="175"
                :height="175"
                src="/image/logo/ASGARD.webp"
              />
            </v-row>
            <h1 class="font-weight-medium text-center text-white">
              <span
                v-for="(letter, index) in ['A', 'S', 'G', 'A', 'R', 'D']"
                :key="index"
                class="title-span px-3 py-4"
                :style="`--i: ${index};`"
              >
                {{ letter }}
              </span>
            </h1> 
            <v-btn
              color="primary"
              block
              size="large"
              rounded="xl"
              nuxt
              to="/information/join-us"
            >
            {{$t('home-join-us')}}
            </v-btn>
            <v-row class="ma-0" justify="center">
              <v-btn
                variant="plain"
                class="my-1"
                :ripple="false"
                to="/information"
              >
                {{$t('home-about-us')}}
              </v-btn>
              <v-btn
                variant="plain"
                class="my-1"
                :ripple="false"
                @click="changeLocale"
              >
                {{$t('translate-quick-switch')}}
              </v-btn>
            </v-row>
          </v-card>
          </v-row>
        </v-parallax>
        <animation-scroll-down />
    </section>
    <section class="about-us-section">
      <v-row justify="center">
        <v-col 
          v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
          class="v-col"
          cols="12"
          xl="8"
        >
          <v-row :class="{
            'flex-row-reverse': index % 2 === 0,
          }">
            <v-col cols="12" lg="6" class="v-col d-flex align-center flex-wrap"  :class="index % 2 === 0 ? 'justify-start' : 'justify-end'">
              <div>
                <h1 class="text-center">Title</h1>
                <p :class="index % 2 !== 0 ? 'text-end' : 'text-start'"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat arcu, finibus ac lorem a, tempor facilisis est. Nullam id neque orci. Mauris volutpat facilisis gravida. Duis justo risus, blandit non faucibus eget, vehicula at nulla. Vestibulum vel neque ut metus congue vehicula at a libero. Pellentesque ex nunc, dignissim non velit eu, placerat tincidunt metus. Quisque placerat leo eget velit mollis, ac hendrerit eros iaculis. Nulla quis mattis sem. Duis nec pharetra justo, quis scelerisque purus.
                </p>
              </div>
            </v-col>
            <v-col cols="12" lg="6" class="v-col d-flex align-center" :class="index % 2 !== 0 ? 'justify-start' : 'justify-end'">
              <NuxtImg src="/image/16x9/banner.webp" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <section class="news-row">
      <v-row>
        <v-col>

        </v-col>
      </v-row>
      <!-- <v-row class="h-100" justify="center" align="center">
        <v-col>
          <v-sheet
            rounded="lg"
            color="background"
            border
          >
            <ContentList :query="articles">
              <template v-slot="{ list }">
                <v-row class="ma-0" justify="center">
                  <v-col cols="6" class="pr-0">
                    <v-sheet class="ma-2" rounded height="calc(100% - 16px)" border color="background">
                      <v-row class="flex-column h-100" justify="space-between">
                        <v-col>
                          <v-card-title class="text-white">{{list[0].title}}</v-card-title>
                          <v-card-subtitle class="text-white mb-4">
                            {{ list[0].author }} |
                            {{ list[0].date }}
                          </v-card-subtitle>
                          <v-card-text>{{ list[0].description }}</v-card-text>
                        </v-col>
                        <v-col cols="auto" class="d-flex justify-end px-6 py-0">
                          <v-btn
                            color="secondary"
                            :ripple="false"
                            class="font-weight-bold"
                            variant="text"
                            :to="list[0]._path"
                          >
                            {{$t('articles-read-more')}}
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-sheet>
                  </v-col>
                  <v-col cols="6" class="pl-0">
                    <articles-list-item 
                      v-for="(article, index) in [list[1], list[2], list[3], list[4]]"
                      :key="`home-article-list-${index}`"
                      :article="article"
                    />
                  </v-col>
                </v-row>
              </template>
              <template #empty>
                <articles-empty />
              </template>
              <template #not-found>
                <articles-not-found />
              </template>
            </ContentList>
          </v-sheet>
        </v-col>
      </v-row> -->
    </section>
  </v-container>
</template>

<style scoped>
  .v-container > .v-container,
  .v-container > section {
    height: 100vh;
  }

  .v-container > section:first-of-type {
    height: calc(100vh - 64px);
  }

  .v-container .news-row {
    max-width: 1200px;
    max-height: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .v-container .v-card .v-card-text {
    max-height: 400px;
    overflow-y: scroll;
  }

  .v-container .about-us-section {
    height: auto;
  }

  .v-container .about-us-section .v-row .v-col > .v-row > .v-col {
    min-height: 500px
  }
  
  .v-container .about-us-section .v-row .v-col > .v-row > .v-col img {
    max-height: 350px;
    max-width: calc(100vw - 32px);
    border-radius: 16px;
  }

  .v-container .about-us-section .v-row .v-col > .v-row > .v-col h1 {
    flex-basis: 100%;
  }

  .v-container .about-us-section .v-row .v-col > .v-row > .v-col p {
    flex-basis: 100%;
    margin: auto
  }

  .v-container .about-us-section .v-row .v-col > .v-row > .v-col p.text-end {
    padding: 0 0 0 64px
  }

  .v-container .about-us-section .v-row .v-col > .v-row > .v-col p.text-start {
    padding: 0 64px 0 0
  }

  .title-span {
    font-family: monospace;
    display: inline-block;
    animation: pop-up 0.4s cubic-bezier(0.2, 0, 0.5, 1) forwards;
    animation-delay: calc(var(--i) * 0.08s);
    opacity: 0;
  }

  @keyframes pop-up {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @media screen and (max-width: 1280px) {
    .v-container .about-us-section .v-row .v-col > .v-row > .v-col {
      justify-content: center !important;
      align-items: center !important;
    }

    .v-container .about-us-section .v-row .v-col > .v-row > .v-col p {
      max-width: 80%;
      text-align: center !important;
      padding: 0px 0px 0px 0px !important;
    }
  }

</style>
