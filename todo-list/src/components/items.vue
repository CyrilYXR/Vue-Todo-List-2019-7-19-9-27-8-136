<template>
  <div>
    <ol>
      <li v-for="item in filterItem" :key="item.id">
        <todoitem v-bind:item="item"></todoitem>
      </li>
    </ol>
  </div>

</template>
<script>
  import Item from './item.vue'
  
  export default {
    name: 'Items',
    props:['filterItem'],
    components: {
     Item
    },
    
  }

</script>
