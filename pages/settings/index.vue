<template>
  <div>
    settings
    <button @click="start">클릭</button>
    {{ cnt }}
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      cnt: 0
    }
  },
  methods: {
    start() {}
  }
}
</script>
