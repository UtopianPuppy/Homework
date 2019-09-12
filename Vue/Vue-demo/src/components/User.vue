<template>
  <div class="page">
    <div class="nav">
      <router-link v-for="(item, index) in userList" :to = "'/user/' + item.id" :key = 'index'>{{item.username}}</router-link>
      <div v-if="userInfo">
        用户名：{{userInfo.username}}<br>
        等级：{{userInfo.level}}
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
let userData = [
  {
    id: '1',
    username: 'nodeing1',
    level: 'vip1'
  },
  {
    id: '2',
    username: 'nodeing2',
    level: 'vip1'
  },
  {
    id: '3',
    username: 'nodeing3',
    level: 'vip2'
  },
  {
    id: '4',
    username: 'nodeing4',
    level: 'vip2'
  },
  {
    id: '5',
    username: 'nodeing5',
    level: 'vip3'
  }
]
export default {
  data () {
    return {
      userList: userData
      // userInfo: null
    }
  },
  components: {

  },
  beforeRouteUpdate (to, from, next) {
    // console.log(1111)
    // next()
    // console.log(to.params.id)
    //    this.userInfo = this.userList.filter((item) => item.id === to.params.id)[0]
    //    console.log(this.userInfo)
    next()
  },
  props: ['id'],
  computed: {
    userInfo () {
      console.log(this.id)
      return this.userList.filter((item) => item.id === this.id)[0]
    }
  }
}
</script>

<style scoped>
  .page {
    height: 1200px;
    border: 5px solid lightcoral;
  }
  .nav a {
    text-decoration: none;
    display: inline-block;
    padding: 8px 40px;
    color: black;
  }
</style>
