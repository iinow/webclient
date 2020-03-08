<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="2">
        <v-select :items="items" label="Http Method" outlined></v-select>
      </v-col>
    </v-row>
  </v-container>
  <!-- <v-container class="fill-height" fluid> -->
  <!-- <v-card>
    <v-tabs
      v-model="tab"
      background-color="brown darken-4"
      dark
      show-arrows
      fixed-tabs="true"
    >
      <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <v-card flat max-height>
          <v-card-text>{{ item.content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card> -->
  <!-- </v-container> -->
</template>

<script lang="ts">
import { http } from '@/constants'
import { map } from 'lodash'

export default {
  middleware: 'auth',
  layout: 'dashboard',
  data() {
    return {
      tab: null,
      items: map(http.method, (item: any) => item.name)
    }
  },
  methods: {}
}
</script>
<style></style>
