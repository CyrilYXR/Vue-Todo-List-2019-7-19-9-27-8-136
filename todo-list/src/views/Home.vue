<template>
  <!-- <div>
    <div class="home-head">
      <router-link to='/welcome' style="float: left; margin:10px 0 10px 50px;">返回</router-link>
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
  </div>-->
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']" >
        <a-menu-item key="1" @click="profile()">
          <a-icon type="user" />
          <span >profile</span>
        </a-menu-item>
        <a-menu-item key="2" @click="todolist()">
          <a-icon type="video-camera" />
          <span>todolist</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <a-button type="primary" @click="returnback()">
          <a-icon type="left" />返回
        </a-button>
        <label style="float: right; margin:10px 50px 10px 0;">{{name}}</label>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: "Home",
  props: ["name"],
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    returnback() {
      this.$router.push({
        name: "welcome"
      });
    },
    profile() {
      this.$router.push({
        name: "profile"
      })
    },
    todolist() {
      this.$router.push({
        name: "todo"
      })
    }
  }
};
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
