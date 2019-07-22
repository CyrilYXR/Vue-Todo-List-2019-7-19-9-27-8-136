<template>
  <div id="app" class="todoapp">
    <Header v-bind:addTodo="addTodo"></Header>
    <Items :filterItems="filterItems"></Items>
    <Footer :changeStatus="changeStatus"></Footer>
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
    data() {
      return {
        todo: '',
        items: [{title: "11",
            isfinished: false,
            editable: false}],
        filterItems: this.items,
        // status: 1
      }
    },
    // computed: {
    //   filterItems: function(){
    //     if(this.status === 2){
    //       return this.items.filter(item => !item.isfinished)
    //     } else if(this.status === 3){
    //       return this.items.filter(item => item.isfinished)
    //     }
    //     return this.items
    //   }
    // },
    methods: {
      addTodo: function(todo){
        debugger
        if(todo === '') {
          return;
        }else{
          this.items.push({
            title: this.todo,
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
        // this.status = status
        if(this.status === 2){
          return this.items.filter(item => !item.isfinished)
        } else if(this.status === 3){
          return this.items.filter(item => item.isfinished)
        }
        return this.items
      
      }
    }
  }

</script>

<style>

  @import './style/style.css'

</style>
