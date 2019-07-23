<template>
  <div>
    <input type="checkbox" v-model="item.isfinished" v-on:click="updateItem(item)"/>
    <label :class="item.isfinished ? 'finishedItem' : 'todoItem'" v-show="!item.editable"
      @dblclick="enableEdit(item)">{{item.title}}</label>
    <input type="text" v-model="item.title" v-show="item.editable" @blur="disableEdit(item),updateItem(item)"
      v-on:keyup.enter="disableEdit(item), updateItem(item)" />
  </div>
</template>
<script>
  export default {
    name: 'item',
    props: ['item'],
    methods: {
      enableEdit(item){
        item.editable = 1;
      },
      disableEdit(item){
        item.editable = 0;
      },
      updateItem(item){
        if(item.isfinished){
          item.isfinished = 0
        } else {
          item.isfinished = 1
        }
        
        this.$store.dispatch('updateItem', item)
      }
    },
  }

</script>
