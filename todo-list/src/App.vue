<template>
  <div id="app" class="todoapp">
    <Header @addTodo="addTodo"></Header>
    <Items v-bind:filterItems="filterItems"></Items>
    <Footer @changeStatus="changeStatus"></Footer>
  </div>
</template>

<script>
  import Header from './components/header.vue'
  import Items from './components/items.vue'
  import Footer from './components/footer.vue'
  export default {
    components: {
      Header,
      Items,
      Footer
    },
    name: 'app',
    created : function() {
      this.filterItems = this.items
    },
    data() {
      return {
        todo: '',
        items: [{title: "11",
            isfinished: false,
            editable: false}],
        filterItems: this.items,
        status: 1
      }
    },
  
    methods: {
      addTodo: function(todo){
        if(todo === '') {
          return;
        }else{
          this.items.push({
            title: todo,
            isfinished: false,
            editable: false
          })
        }
        this.todo=''
      },
      
      enableEdit(item){
        item.editable = true;
      },
      disableEdit(item){
        item.editable = false;
      },
      changeStatus: function(status){
        this.status = status
        if(this.status === 2){
          this.filterItems =  this.items.filter(item => !item.isfinished)
        } else if(this.status === 3){
          this.filterItems = this.items.filter(item => item.isfinished)
        } else {
          this.filterItems =  this.items
        }
      }
    }
  }

</script>

<style>

  @import './style/style.css'

</style>
