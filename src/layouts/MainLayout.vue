<template>
  <q-layout view="lHh lpr lFf">
    <q-drawer
      class="bg-primary"
      behavior="desktop"
      v-model="leftDrawerOpen"
      elevated
      :width="360"
    >
      <q-list class="text-white">
        <q-item-label header class="text-white text-bold text-h6 text-center">
          {{ Info.title }}
        </q-item-label>
        <q-item>
          <q-item-section side>
            <q-icon name="fas fa-user-circle" color="white" />
          </q-item-section>
          <q-item-section> {{ Info.name }} </q-item-section>
        </q-item>
        <q-item>
          <q-item-section side>
            <q-icon name="fas fa-envelope" color="white" />
          </q-item-section>
          <q-item-section>
            <a :href="`mailto:${Info.email}`" class="text-white">
              {{ Info.email }}</a
            >
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section side>
            <q-icon name="fas fa-mobile" color="white" />
          </q-item-section>
          <q-item-section> {{ Info.mobile }} </q-item-section>
        </q-item>
        <q-item>
          <q-item-section side>
            <q-icon name="fab fa-github" color="white" />
          </q-item-section>
          <q-item-section>
            <a
              :href="`https://github.com/${Info.gh_username}`"
              class="text-white"
            >
              {{ Info.gh_username }}</a
            >
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section side>
            <q-icon name="fas fa-blog" color="white" />
          </q-item-section>
          <q-item-section>
            <a :href="Info.blog" class="text-white">{{ Info.blog }}</a>
          </q-item-section>
        </q-item>

        <q-item-label header class="text-white text-bold text-h6 text-center">
          {{ Skills.title }}
        </q-item-label>
        <q-item v-for="(item, index) in Skills.skills" :key="index">
          <q-item-section>
            <q-item-label>{{ item.label }}</q-item-label>
            <q-item-label>
              <q-slider readonly :model-value="item.value" color="white" />
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item-label header class="text-white text-bold text-h6 text-center">
          {{ Misc.title }}
        </q-item-label>
        <q-card
          flat
          v-for="(item, index) in Misc.misc"
          :key="index"
          class="bg-dark q-ma-md"
        >
          <q-card-section class="row justify-between items-center">
            <div>{{ item }}</div>
            <q-icon name="fas fa-check-circle"></q-icon>
          </q-card-section>
        </q-card>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-secondary">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Info, Skills, Misc } from 'src/components/config'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(true)
    return {
      leftDrawerOpen,
      Info,
      Skills,
      Misc,
    }
  },
})
</script>
