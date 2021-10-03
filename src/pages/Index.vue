<template>
  <q-page class="q-pa-lg">
    <div class="row justify-between">
      <div>
        <div class="text-h6 text-primary">教育</div>
        <q-timeline color="primary">
          <q-timeline-entry
            v-for="(item, index) in Edus"
            :key="index"
            :subtitle="item.time"
          >
            <template v-slot:title>
              <div class="row q-gutter-x-sm text-subtitle1">
                <div>
                  <a :href="item.link" class="text-dark">{{ item.school }}</a>
                </div>
                <q-badge :label="item.major" color="primary" />
                <q-badge :label="item.degree" color="dark" />
              </div>
            </template>
          </q-timeline-entry>
        </q-timeline>
      </div>
      <div>
        <div class="text-h6 text-primary">{{ WorkType }}</div>
        <q-timeline color="primary">
          <q-timeline-entry
            v-for="(item, index) in Works"
            :key="index"
            :subtitle="item.time"
          >
            <template v-slot:title>
              <div class="row q-gutter-x-sm text-subtitle1">
                <a :href="item.link" class="text-dark">{{ item.company }}</a>
                <q-badge :label="item.work" color="primary" />
              </div>
            </template>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </div>

    <div class="row justify-between">
      <div class="col-auto">
        <div class="text-h6 text-primary">荣誉</div>
        <q-timeline color="primary">
          <q-timeline-entry
            v-for="(item, index) in Awards"
            :key="index"
            :subtitle="item.time"
          >
            <template v-slot:title>
              <div class="row q-gutter-x-sm text-subtitle1">
                <div>{{ item.competition }}</div>
                <q-badge :label="item.award" color="primary" />
                <q-badge v-if="item.extra" :label="item.extra" color="dark" />
              </div>
            </template>
          </q-timeline-entry>
        </q-timeline>
      </div>

      <div class="col q-ml-xs">
        <div class="text-h6 text-primary">参与开源</div>
        <div class="q-mt-sm">
          <q-card
            flat
            v-for="(item, index) in OpenSrc"
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

    <div class="text-h6 text-primary">项目</div>
    <q-markup-table flat dense class="q-mt-md bg-info">
      <thead class="text-bold">
        <tr>
          <th class="text-left text-subtitle2">名称</th>
          <th class="text-left text-subtitle2">简介</th>
          <th class="text-left text-subtitle2">技术</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in Projects" :key="index">
          <td>{{ item.name }}</td>
          <td>
            {{ item.desc }}
            <q-badge v-if="item.badge" :label="item.badge" color="primary" />
          </td>
          <td class="q-gutter-x-xs">
            <q-badge v-for="t in item.tech" :key="t" :label="t" color="dark" />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  Edus,
  Works,
  WorkType,
  Awards,
  OpenSrc,
  Projects,
} from 'components/config'

export default defineComponent({
  name: 'PageIndex',
  setup() {
    return {
      Edus,
      WorkType,
      Works,
      Awards,
      OpenSrc,
      Projects,
    }
  },
})
</script>
