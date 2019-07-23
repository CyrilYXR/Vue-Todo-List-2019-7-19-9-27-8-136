<template>
    <div>
        <div>
            <h1>Home</h1>
            <p>{{name}}</p>
            <router-link to='/welcome'>返回</router-link>
        </div>
        <div>
            <div>
                <router-link :to="{name: 'todo'}" replace>todo</router-link>
                <!-- <router-link :to="{name: 'profile'}" replace>todo</router-link> -->
            </div>
            
            <div>
                <router-link :to="{name: 'profile'}" replace>profile</router-link>
            </div>
            
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
   

</template>

<script>
export default {
    name: 'Home',
    props: ['name'],
    methods: {
        // todo(){
        //     this.$router.push({name: 'todo'})
        // },
        // profile(){
        //     this.$router.push({name: 'profile'})
        // }
    }
}
</script>

