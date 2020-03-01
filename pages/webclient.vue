<template>
  <div>
    Hello
    <button @click="hello2('dfdfd')">콜</button>
  </div>
</template>

<script lang="ts">
export default {
  mounted () {
    console.log('아...')
  },
  methods: {
    hello: function (str:string): string {
      console.log(str)
      return str
    },
    hello2 (str: string): string {
      console.log(str)
      return str
    }
  }
}
</script>

<style>

</style>