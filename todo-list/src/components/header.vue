<template>
  <div id="head">
    <h1>Jquery To Do List</h1>
    <h3>Simple Todo List with adding and filter by diff status.</h3>
    <div>
      <!-- <input type="text" v-model="todo" class="todoInput" /> -->
      <a-input type="text" id="name" class="todoInput" v-model="todo" />
      <a-button class="addButton" style="Primary" @click="addTodo(todo)">Add</a-button>
    </div>
    <!-- <a-input type="text" id="name" v-model="name" /> -->
    <!-- <button class="addButton" v-on:click="addTodo(todo)">Add</button> -->
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
  methods: {
    addTodo: function(todo) {
      // this.$emit('addTodo', todo)
      // this.$store.commit("addTodo", todo)
      this.$store.dispatch("addTodo", todo);
      this.todo = "";
    }
  },
  data() {
    return {
      todo: ""
    };
  }
};
</script>
