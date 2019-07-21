<template>
  <div id="app" class="todoapp">
    <h1>Jquery To Do List</h1>
    <h2>Simple Todo List with adding and filter by diff status.</h2>
    <input type="text" v-model="todo" class="todoInput">
    <button class="addButton" v-on:click="addTodo(todo)">Add</button>

    <div id="todolist">
      <div>
        <ol v-show="list.length">
          <li v-for="item in list" :key="item.id">
            <div>
              <input type="checkbox" v-model="item.isfinished"/>
              <label :class="item.isfinished ? 'finishedItem' : 'todoItem'">{{item.title}}</label>
            </div>
          </li>
        </ol>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {

    },

    data() {
      return {
        todo: '',
        list: [],
        listname: '',
        status: 1
      }
    },

    methods: {
      addTodo: function(todo){
        if(todo === '') {
          return;
        }else{
          this.list.push({
            title: this.todo,
            isfinished: false,
            editable: false
          })
        }
        this.todo=''
      }
    }
  }

</script>

<style>

  @import './style/style.css'

</style>
