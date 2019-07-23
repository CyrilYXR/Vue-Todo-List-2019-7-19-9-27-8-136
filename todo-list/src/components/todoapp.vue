<template>
  <div id="todoapp">
    <Header ></Header>
    <Items ></Items>
    <Footer ></Footer>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
  import Header from './header.vue'
  import Items from './items.vue'
  import Footer from './footer.vue'
  export default {
    components: {
      Header,
      Items,
      Footer
    },
    name: 'Todoapp',
    methods: {
    },
    created(){
      this.$store.dispatch('loadItems');
    }
  }

</script>

<style>

   @import '../style/style.css';

</style>
