<template>
  <div>
    메인 페이지..
  </div>
</template>

<script>
import moment from 'moment'

export default {
  middleware: 'auth',
  layout: 'dashboard',
  props: {
    source: String
  },
  created() {
    this.$vuetify.theme.dark = true
  },
  methods: {}
}
</script>

<style></style>
