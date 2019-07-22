<template>
  <div>
    <ol>
      <li v-for="(item,index) in filterItems" :key="item.id">
        <div :class="index%2===0 ? 'odd' : 'even'">
          <Item v-bind:item="item"></Item>
        </div>
      </li>
    </ol>
  </div>

</template>
<script>
  import Item from './item.vue'
  
  export default {
    name: 'Items',
    props:['filterItems'],
    components: {
     Item
    },
    
  }

</script>
