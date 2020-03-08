<template>
  <v-app>
    <!-- 좌측 네비게이션 메뉴 -->
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link v-for="(item, index) in menu" :key="index">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.id }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- 상단 바 -->
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>

    <!-- 컨텐츠 -->
    <v-content>
      <nuxt />
    </v-content>

    <!-- 하단 -->
    <v-footer app>
      <span>{{ now }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import moment from 'moment'
import { app, dashboard } from '@/constants'

export default {
  data: () => ({
    drawer: null,
    now: moment().format('YYYY-MM-DD'),
    title: app.name,
    menu: dashboard.menu
  }),
  created() {
    this.$vuetify.theme.dark = true
  }
}
</script>

<style></style>
