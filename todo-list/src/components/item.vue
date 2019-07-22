<template>
  <div :class="index%2===0 ? 'odd' : 'even'">
    <input type="checkbox" v-model="item.isfinished" />
    <label :class="item.isfinished ? 'finishedItem' : 'todoItem'" v-show="!item.editable"
      @dblclick="enableEdit(item)">{{item.title}}</label>
    <input type="text" v-model="item.title" v-show="item.editable" @blur="disableEdit(item)"
      v-on:keyup.enter="disableEdit(item)" />
  </div>
</template>
<script>
  export default {
    name: 'item',
    props: ['item'],
    methods: {
      enableEdit(item){
        item.editable = true;
      },
      disableEdit(item){
        item.editable = false;
      }
    }
  }

</script>
