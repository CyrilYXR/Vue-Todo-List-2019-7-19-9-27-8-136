<template>
  <div id="app" class="todoapp">
    <Header ></Header>
    <Items ></Items>
    <Footer ></Footer>
  </div>
</template>

<script>
  import Header from './components/header.vue'
  import Items from './components/items.vue'
  import Footer from './components/footer.vue'
  export default {
    components: {
      Header,
      Items,
      Footer
    },
    name: 'app',
    methods: {
    }
  }

</script>

<style>

  @import './style/style.css'

</style>
