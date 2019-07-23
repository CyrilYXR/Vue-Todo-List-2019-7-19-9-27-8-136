<template>
  <div>
    <div class="home-head">
      <router-link to='/welcome' style="float: left; margin:10px 0 10px 50px;">返回</router-link>
      <!-- <label style="text-align: center;">Home</label> -->
      <label style="float: right; margin:10px 50px 10px 0;">{{name}}</label>
    </div>
    <div class="home-left">
      <div>
        <router-link :to="{name: 'todo'}" replace style="margin:25%">todo</router-link>
      </div>
      <div>
        <router-link :to="{name: 'profile'}" replace style="margin:25%">profile</router-link>
      </div>
    </div>
    <div class="home-right">
      <router-view style="text-align: center;"></router-view>

    </div>
  </div>


</template>

<script>
  export default {
    name: 'Home',
    props: ['name']
  }

</script>
