<template>
  <div class="welcome">

    <a-input type="text" id="name" v-model="name" />
    <!-- <button class="commonButton" @click="begin()">开始使用</button> -->
    <a-button style="Primary" @click="begin()">开始使用</a-button>
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

