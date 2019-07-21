<template>
  <div id="app" class="todoapp">
    <h1>Jquery To Do List</h1>
    <h2>Simple Todo List with adding and filter by diff status.</h2>
    <input type="text" v-model="todo" class="todoInput">
    <button class="addButton" v-on:click="addTodo(todo)">Add</button>

    <div id="todolist">
      <div>
        <ol v-show="list.length">
          <li v-for="(item,index) in filterItem" :key="item.id">
            <div :class="index%2===0 ? 'odd' : 'even'">
              <input type="checkbox" v-model="item.isfinished"/>
              <label :class="item.isfinished ? 'finishedItem' : 'todoItem'"
                v-show="!item.editable" @dblclick="enableEdit(item)">{{item.title}}</label>
              <input type="text" v-model="item.title" v-show="item.editable"
               @blur="disableEdit(item)" v-on:keyup.enter="disableEdit(item)"/>
            </div>
          </li>
        </ol>
      </div>
    </div>

    <div>
      <Button class="statusbtn" @click="changeStatus(1)">All</button>
      <Button class="statusbtn" @click="changeStatus(2)">Active</Button>
      <Button class="statusbtn" @click="changeStatus(3)">Complete</Button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      filterItem: function(){
        if(this.status === 2){
          return this.list.filter(item => !item.isfinished)
        } else if(this.status === 3){
          return this.list.filter(item => item.isfinished)
        }
        return this.list
      }
    },

    data() {
      return {
        todo: '',
        list: [],
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
      },

      changeStatus: function(status){
        this.status = status
      },
      enableEdit(item){
        item.editable = true;
      },
      disableEdit(item){
        item.editable = false;
      }
    }
  }

</script>

<style>

  @import './style/style.css'

</style>
