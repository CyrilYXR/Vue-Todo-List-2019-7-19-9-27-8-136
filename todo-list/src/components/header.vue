<template>
  <div id="head">
    <h1>Jquery To Do List</h1>
    <h3>Simple Todo List with adding and filter by diff status.</h3>
    <div>
      <!-- <input type="text" v-model="todo" class="todoInput" /> -->
      <a-input type="text" id="name" class="todoInput" v-model="todo" />
      <a-button class="addButton" style="Primary" @click="showModal">Add</a-button>
      <a-modal
        title="Title"
        :visible="visible"
        @ok="addTodo(todo)"
        @cancel="handleCancel"
      >
        <p>add ' {{todo}} ' to your todo list?</p>
      </a-modal>
    </div>
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
      this.visible = false;
    },
    showModal() {
      this.visible = true
    },
    handleCancel() {
      this.visible = false
    },
  },
  data() {
    return {
      todo: "",
      visible: false,
    };
  }
};
</script>
