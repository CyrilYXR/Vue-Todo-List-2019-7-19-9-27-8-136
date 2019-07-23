<template>
    <div>
        <label>{{name}}</label>
    </div>
</template>
<script>
export default {
    name: 'Profile',
    data(){
        return{
            name: this.getName()
        }
    },
    methods:{
        getName(){
            return this.$route.params.name
        }
    },
}
</script>

