<template>
  <div class="welcome">
    <input class="todoInput" type="text" id="name" v-model="name">
    <button class="commonButton" @click="begin()">开始使用</button>
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

<style>
  .welcome{
    display: flex;
    justify-content: center;
    margin: 20% 0;
  }
</style>

