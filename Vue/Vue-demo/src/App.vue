<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="header">
      <!--<a href="#/">首页</a>-->
      <!--<a href="#/course">课程</a>-->
      <!--<a href="#/vip">会员</a>-->
      <!--<a href="#/question">问答</a>-->
      <router-link to = '/' exact>首页</router-link>
      <router-link :to = course>课程</router-link>
      <router-link to = '/vip'>会员</router-link>
      <router-link :to = "{name: 'wd'}">问答</router-link>
      <router-link to = './user'>用户</router-link>
      <!--<hr>-->
      <!--<router-link to = '/vip' tag = 'div'>vip</router-link>-->
    </div>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="main">
      <!--<h1>编程式导航方法</h1>-->
      <!--<p>-->
        <!--<button @click = 'pushHandle'>push</button>-->
        <!--<button @click = 'replaceHandle'>replace</button>-->
        <!--<button @click = 'backHandle'>back</button>-->
        <!--<button @click = 'forwardHandle'>forward</button>-->
        <!--<button @click = 'goHandle'>go</button>-->
      <!--</p>-->
      <router-view name = 'left'></router-view>
      <router-view name = 'right'></router-view>
    </div>

    <!--
        router-link 跳转链接
        1 to: 跳转地址 可以动态绑定 :to
        2 默认渲染出来是a标签 可以自定义tag
        3 默认支持的是点击事件 设置样式在router-link上加 active-class
        更换切换的事件 （移入移出） event = '事件名称'
        4 设置样式在router-link上加 active-class 还可以加全局样式
        5 默认情况下是模糊匹配/vip(/、/vip) 精准匹配exact
    -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      index: '/',
      course: '/course'
    }
  },
  methods: {
    pushHandle () {
      // console.log(this.$router)
      // 往浏览器历史记录栈添加一条记录
      this.$router.push('/question')
    },
    replaceHandle () {
      this.$router.replace('./question')
    },
    backHandle () {
      this.$router.back()
    },
    forwardHandle () {
      this.$router.forward()
    },
    goHandle () {
    // this.$router.go(1)
      this.$router.go(-1)
    }
  }
}
</script>

<style>
  body {
    margin: 0;
  }
  #app .header {
    background-color: black;
  }

  #app .header a {
    text-decoration: none;
    color: white;
    padding: 8px 20px;
    display: inline-block;
  }
  .actv {
    background-color: blueviolet;
  }
  .v-enter {
    transform: translateX(-100%);
  }
  .v-enter-to {
    transform: translateX(0);
  }
  .v-enter-active {
    transition: 0.5s;
  }
  .v-leave {
    transform: translateX(0);
  }
  .v-leave-to {
    transform: translateX(100%);
  }
  .v-leave-active {
    transition: 0.5s;
  }
</style>
