<template>
  <div id="head">
    <h1>Jquery To Do List</h1>
    <h3>Simple Todo List with adding and filter by diff status.</h3>
    <input type="text" v-model="todo" class="todoInput">
    <button class="addButton" v-on:click="addTodo(todo)">Add</button>
    
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props:{
    },
    methods: {
      addTodo: function (todo) {
        // this.$emit('addTodo', todo)
        this.$store.commit("addTodo", todo)
        this.todo=''
      },
    },
    data(){
      return{
        todo: ''
      }
    }
  }

</script>
