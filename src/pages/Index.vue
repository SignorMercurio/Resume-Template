<template>
  <q-page class="q-pa-lg">
    <div class="row justify-between">
      <div>
        <div class="text-h6 text-primary">
          <q-icon name="fas fa-graduation-cap" left />
          <span>{{ Edus.title }} </span>
        </div>
        <q-timeline color="primary">
          <q-timeline-entry
            v-for="(item, index) in Edus.edus"
            :key="index"
            :subtitle="item.time"
          >
            <template v-slot:title>
              <div class="text-subtitle1">
                <a :href="item.link" class="text-dark">{{ item.school }}</a>
                <div class="row q-gutter-x-md">
                  <span>{{ item.major }}</span>
                  <q-badge outline :label="item.degree" color="dark" />
                </div>
              </div>
            </template>
          </q-timeline-entry>
        </q-timeline>
      </div>
      <div>
        <div class="text-h6 text-primary">
          <q-icon name="fas fa-briefcase" left />
          <span>{{ Works.title }}</span>
        </div>
        <q-timeline color="primary">
          <q-timeline-entry
            v-for="(item, index) in Works.works"
            :key="index"
            :subtitle="item.time"
          >
            <template v-slot:title>
              <div class="row q-gutter-x-sm text-subtitle1">
                <a :href="item.link" class="text-dark">{{ item.company }}</a>
                <q-badge outline :label="item.work" color="dark" />
              </div>
            </template>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </div>

    <div class="row justify-between">
      <div class="col-auto">
        <div class="text-h6 text-primary">
          <q-icon name="fas fa-trophy" left />
          <span>{{ Awards.title }} </span>
        </div>
        <q-timeline color="primary">
          <q-timeline-entry
            v-for="(item, index) in Awards.awards"
            :key="index"
            :subtitle="item.time"
          >
            <template v-slot:title>
              <div
                class="row q-gutter-x-sm text-subtitle1 text-wrap"
                :style="Awards.style"
              >
                <div>
                  {{ item.competition }}
                </div>
                <q-badge outline :label="item.award" color="dark" />
                <q-badge
                  outline
                  v-if="item.extra"
                  :label="item.extra"
                  color="dark"
                />
              </div>
            </template>
          </q-timeline-entry>
        </q-timeline>
      </div>

      <div class="col q-ml-xs">
        <div class="text-h6 text-primary">
          <q-icon name="fas fa-code-branch" left />
          <span>{{ OpenSrc.title }}</span>
        </div>
        <div class="q-mt-sm">
          <q-card
            flat
            v-for="(item, index) in OpenSrc.openSrc"
            :key="index"
            class="q-my-sm bg-info"
          >
            <a
              :href="`https://github.com/${item}`"
              style="text-decoration: none"
              class="text-dark"
            >
              <q-card-section class="row justify-between">
                <div>{{ item }}</div>
                <img
                  :src="`https://img.shields.io/github/stars/${item}?style=social`"
                  alt="GitHub Repo stars"
                />
              </q-card-section>
            </a>
          </q-card>
          <div class="q-mt-md text-dark">......</div>
        </div>
      </div>
    </div>

    <div class="text-h6 text-primary">
      <q-icon name="fas fa-code" left />
      <span>{{ Projects.title }}</span>
    </div>
    <q-markup-table flat dense class="q-mt-md bg-info">
      <thead class="text-bold">
        <tr>
          <th
            class="text-left text-subtitle2"
            v-for="header in Projects.header"
            :key="header"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in Projects.projects" :key="index">
          <td v-if="item.url">
            <a :href="item.url" class="text-dark">{{ item.name }}</a>
          </td>
          <td v-else>{{ item.name }}</td>
          <td>
            {{ item.desc }}
            <q-badge
              outline
              v-if="item.badge"
              :label="item.badge"
              color="dark"
            />
          </td>
          <td class="q-gutter-x-xs">
            <q-badge
              outline
              v-for="t in item.tech"
              :key="t"
              :label="t"
              color="dark"
            />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Edus, Works, Awards, OpenSrc, Projects } from 'src/components/config'

export default defineComponent({
  name: 'PageIndex',
  setup() {
    return {
      Edus,
      Works,
      Awards,
      OpenSrc,
      Projects,
    }
  },
})
</script>
