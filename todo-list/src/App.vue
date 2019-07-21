<template>
  <div id="app" class="todoapp">
    <h1>Jquery To Do List</h1>
    <h2>Simple Todo List with adding and filter by diff status.</h2>
    <input type="text" v-model="todo" class="todoInput">
    <button class="addButton">Add</button>

    <div id="todolist">
      <div>
        <ol v-show="list.length">
          <li v-for="item in list" :key="item.id">
            <div>
              <input type="checkbox" />
              <label>{{item.title}}</label>
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
        list: [{
          title: '123',
          isfinished: false,
          editable: false
        }
        ],
        listname: '',
        value: 1
      }
    },

    methods: {

    }
  }

</script>

<style>

  @import './style/style.css'

</style>
