<template>
  <q-layout view="lHh lpr lFf">
    <q-drawer
      class="bg-primary"
      behavior="desktop"
      v-model="leftDrawerOpen"
      elevated
      :width="300"
    >
      <q-list class="text-white">
        <q-item-label header class="text-white text-bold text-h6 text-center">
          {{ t('info.title') }}
        </q-item-label>
        <q-item>
          <q-item-section side>
            <q-icon name="fas fa-user-circle" color="white" />
          </q-item-section>
          <q-item-section> {{ t('info.name') }} </q-item-section>
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
          {{ t('job_intention.title') }}
        </q-item-label>
        <q-item v-for="(item, i) in JobIntention.list" :key="i">
          <q-item-section side>
            <q-icon :name="item.icon" color="white" />
          </q-item-section>
          <q-item-section>
            {{ t(`job_intention.list[${i}].name`) }}
          </q-item-section>
        </q-item>

        <q-item-label header class="text-white text-bold text-h6 text-center">
          {{ t('skills.title') }}
        </q-item-label>
        <q-item v-for="(item, index) in Skills.list" :key="-index">
          <q-item-section>
            <q-item-label>{{ item.label }}</q-item-label>
            <q-item-label>
              <!-- <q-slider readonly :model-value="item.value" color="white" /> -->
              <q-linear-progress
                color="info"
                rounded
                :value="item.value / 100"
              ></q-linear-progress>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item-label header class="text-white text-bold text-h6 text-center">
          {{ t('misc.title') }}
        </q-item-label>
        <q-card
          flat
          v-for="(item, i) in Misc.list"
          :key="i"
          class="bg-dark q-ma-md"
        >
          <q-card-section class="row justify-between items-center">
            <div>{{ t(`misc.list[${i}]`) }}</div>
            <q-icon name="fas fa-check-circle"></q-icon>
          </q-card-section>
        </q-card>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-secondary">
      <router-view />
      <q-btn
        flat
        :label="locale == 'en-US' ? 'English' : '简体中文'"
        icon="fas fa-language"
        size="sm"
        class="lang"
        @click="toggleLang"
      />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import configDrawer from 'components/config.self'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const { t, locale } = useI18n({ useScope: 'global' })
    const leftDrawerOpen = ref(true)

    const { info, job_intention, skills, misc } = configDrawer
    const Info = ref(info)
    const JobIntention = ref(job_intention)
    const Skills = ref(skills)
    const Misc = ref(misc)

    function toggleLang() {
      locale.value = locale.value == 'en-US' ? 'zh-CN' : 'en-US'
    }

    return {
      t,
      locale,
      toggleLang,
      leftDrawerOpen,
      Info,
      JobIntention,
      Skills,
      Misc,
    }
  },
})
</script>

<style lang="sass" scoped>
.lang
  position: absolute
  top: 25px
  right: 20px
</style>
