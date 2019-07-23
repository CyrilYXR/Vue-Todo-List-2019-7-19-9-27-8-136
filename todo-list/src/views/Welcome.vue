<template>
  <div style="">
    <input type="text" id="name" v-model="name">
    <button @click="begin()">开始使用</button>
  </div>
</template>
<script>
  export default {
    name: 'Welcome',
    methods: {
      begin() {
        this.$router.push({
          name: 'home',
          params: {
            name: this.name
          }
        })
      }
    },
    data() {
      return {
        name: ''
      }
    }
  }

</script>
