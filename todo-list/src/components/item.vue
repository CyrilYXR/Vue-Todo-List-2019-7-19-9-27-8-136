<template>
  <div>
    <input type="checkbox" v-model="item.isfinished" v-on:click="updateItem(item)"/>
    <label :class="item.isfinished ? 'finishedItem' : 'todoItem'" v-show="!editable"
      @dblclick="editable=1">{{item.title}}</label>
    <input type="text" v-model="item.title" v-show="editable" @blur="editable=0,updateItem(item)"
      v-on:keyup.enter="editable=0, updateItem(item)" />
    <input class="deletebtn" type="button" value="X" @click="deleteItem(item)"/>
  </div>
</template>
<script>
  export default {
    name: 'item',
    props: ['item'],
    data(){
      return{
        editable: 0
      }
    },
    methods: {
      updateItem(item){
        if(item.isfinished){
          item.isfinished = 0
        } else {
          item.isfinished = 1
        }
        
        this.$store.dispatch('updateItem', item)
      },
      deleteItem(item){
        this.$store.dispatch('deleteItem', item.id)
        window.reload
      }
    },
  }

</script>
