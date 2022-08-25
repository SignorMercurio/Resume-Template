<template>
  <q-page class="q-pa-lg">
    <div class="row justify-between">
      <div class="col-auto">
        <div>
          <div class="text-h6 text-primary">
            <q-icon name="fas fa-graduation-cap" left />
            <span>{{ t('edu.title') }} </span>
          </div>
          <q-timeline color="primary">
            <q-timeline-entry
              v-for="(item, i) in Edu.list"
              :key="i"
              :subtitle="item.time"
            >
              <template v-slot:title>
                <div class="text-subtitle1">
                  <a :href="item.link" class="text-dark">{{
                    t(`edu.list[${i}].school`)
                  }}</a>
                  <div class="row q-gutter-x-md">
                    <span>{{ t(`edu.list[${i}].major`) }}</span>
                    <q-badge
                      outline
                      :label="t(`edu.list[${i}].degree`)"
                      color="dark"
                    />
                  </div>
                  <div v-if="item.extra" class="text-subtitle2 text-grey-7">
                    {{ t(`edu.list[${i}].extra`) }}
                  </div>
                </div>
              </template>
            </q-timeline-entry>
          </q-timeline>
        </div>
        <div>
          <div class="text-h6 text-primary">
            <q-icon name="fas fa-briefcase" left />
            <span>{{ t(`work.title`) }}</span>
          </div>
          <q-timeline color="primary">
            <q-timeline-entry
              v-for="(item, i) in Work.list"
              :key="i"
              :subtitle="item.time"
            >
              <template v-slot:title>
                <div class="row q-gutter-x-sm text-subtitle1">
                  <a :href="item.link" class="text-dark">{{
                    t(`work.list[${i}].company`)
                  }}</a>
                  <q-badge
                    outline
                    :label="t(`work.list[${i}].work`)"
                    color="dark"
                  />
                </div>
              </template>
            </q-timeline-entry>
          </q-timeline>
        </div>
      </div>

      <div class="col q-ml-sm">
        <div class="text-h6 text-primary">
          <q-icon name="fas fa-code-branch" left />
          <span>{{ t(`openSrc.title`) }}</span>
        </div>
        <div class="q-mt-sm">
          <q-card
            flat
            v-for="(item, index) in OpenSrc.list"
            :key="index"
            class="q-my-sm bg-info"
          >
            <a
              :href="`https://github.com/${item.name}`"
              style="text-decoration: none"
              class="text-dark"
            >
              <q-card-section class="row justify-between">
                <div class="q-gutter-x-xs">
                  <span>{{ item.name }}</span>
                  <q-badge v-for="type in item.contrib" :key="type">{{
                    type
                  }}</q-badge>
                </div>
                <img
                  :src="`https://img.shields.io/github/stars/${item.name}?style=social`"
                  alt="GitHub Repo stars"
                />
              </q-card-section>
            </a>
          </q-card>
          <div class="q-mt-md text-dark text-right">......</div>
        </div>
      </div>
    </div>

    <div class="text-h6 text-primary">
      <q-icon name="fas fa-trophy" left />
      <span>{{ t(`awards.title`) }} </span>
    </div>
    <q-markup-table flat dense class="q-mt-md bg-info">
      <thead class="text-bold">
        <tr>
          <th
            class="text-left text-subtitle2"
            v-for="(header, i) in Awards.header"
            :key="i"
          >
            {{ t(`awards.header[${i}]`) }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, i) in Awards.list" :key="i">
          <tr>
            <td>{{ item.time }}</td>
            <td>
              {{ t(`awards.list[${i}].competition`) }}
            </td>
            <td>
              {{ t(`awards.list[${i}].award`) }}
            </td>
          </tr>
        </template>
      </tbody>
    </q-markup-table>

    <div class="text-h6 text-primary q-mt-md">
      <q-icon name="fas fa-code" left />
      <span>{{ t('projects.title') }}</span>
    </div>
    <q-list>
      <q-item v-for="(item, i) in Projects.list" :key="i">
        <q-item-section>
          <q-item-label>
            <span v-if="item.url">
              <a :href="item.url" class="text-dark"
                ><b
                  ><i>{{ t(`projects.list[${i}].name`) }}</i></b
                ></a
              >
            </span>
            <span v-else>
              <b
                ><i>{{ t(`projects.list[${i}].name`) }}</i></b
              >
            </span>

            | {{ t(`projects.list[${i}].desc`) }}
            <q-badge
              v-if="item.badge"
              :label="t(`projects.list[${i}].badge`)"
              color="dark"
            />
          </q-item-label>
          <q-item-label v-if="item.detail" caption>{{
            t(`projects.list[${i}].detail`)
          }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="row q-gutter-x-xs">
            <q-badge
              outline
              v-for="t in item.tech"
              :key="t"
              :label="t"
              color="dark"
            />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import configIndex from 'src/components/config.self'

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const { t } = useI18n({ useScope: 'global' })

    const { edu, work, awards, openSrc, projects } = configIndex
    const Edu = ref(edu)
    const Work = ref(work)
    const Awards = ref(awards)
    const OpenSrc = ref(openSrc)
    const Projects = ref(projects)

    return {
      t,
      Edu,
      Work,
      Awards,
      OpenSrc,
      Projects,
    }
  },
})
</script>
