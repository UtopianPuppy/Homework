<template>
  <div class="page">
    <h1>Axios Demo</h1>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
export default {
  data () {
    return {

    }
  },
  components: {

  },
  created () {
    //  1 一次发送多个请求
    function http1 () {
      return axios.get('https://easy-mock.com/mock/5d6dd52b7e545d6cb89a4f30/data/course/list')
    }
    function http2 () {
      return axios.post('https://easy-mock.com/mock/5d6dd52b7e545d6cb89a4f30/data/course/add')
    }
    //    axios.all([http1(), http2()]).then((res) => {
    //      console.log(res)
    //    })
    //  分割响应结果
    axios.all([http1(), http2()]).then(axios.spread((res1, res2) => {
      console.log('===>', res1)
      console.log('===>', res2)
    }))
  }
}
</script>

<style scoped>
</style>
