<template>
    <div>
      <Button class="statusbtn" @click="changeStatus(1)">All</button>
      <Button class="statusbtn" @click="changeStatus(2)">Active</Button>
      <Button class="statusbtn" @click="changeStatus(3)">Complete</Button>
    </div>
</template>


<script>
export default {
    name:'Footer',
    methods:{
      changeStatus: function(status){
        this.$emit('changeStatus', status)
      }
    }
}
</script>
