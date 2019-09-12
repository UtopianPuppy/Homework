<template>
  <div class="page">
    <h1>我是vip页面</h1>
    <div class="nav">
      <ul>
        <router-link tag = 'li' to = '/vip/one'><a href="">一级会员</a></router-link>
        <router-link tag = 'li' to = '/vip/two'><a href="">二级会员</a></router-link>
        <router-link tag = 'li' to = '/vip/three'><a href="">三级会员</a></router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
  ul, li {
    margin: 0;
    padding: 0;
  }
  li {
    float: left;
    margin-left: 30px;
    width: 200px;
    height: 200px;
    list-style: none;
    background-color: orangered;
  }
  a {
    text-decoration: none;
    display: block;
    width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    color: white;
  }
</style>
