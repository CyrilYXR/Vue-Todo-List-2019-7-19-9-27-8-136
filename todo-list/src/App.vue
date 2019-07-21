<template>
  <div id="app">
    <h1>Jquery To Do List</h1>
    <h2>Simple Todo List with adding and filter by diff status.</h2>
    <input type="text" v-model="todo"><button>Add</button>

    <div id="todolist">
      <div>
        <ul v-show="list.length">
          <li v-for="item in list" :key="item.id">
            <div>
              <input type="checkbox" />
              <label>{{item.title}}</label>
            </div>
          </li>
        </ul>
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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
