<template>
  <div class="page">
    <h1>Axios Demo</h1>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
const HTTP = axios.create({
  baseURL: ' https://easy-mock.com/mock/5d6dd52b7e545d6cb89a4f30/data',
  headers: {
    'name': 'xiaoqiang'
  },
  timeout: 1000
})
HTTP.interceptors.request.use((config) => {
  // 请求发送之前可以做一些事情
  console.log('加载一张菊花图')
  return config
}, (err) => {
  // 处理错误之前可以做一些事情
  return Promise.reject(err)
})
HTTP.interceptors.response.use((response) => {
  // 响应发送前需要做的事情
  console.log('关闭菊花图')
  return response
}, (err) => {
  return Promise.reject(err)
})
export default {
  data () {
    return {

    }
  },
  components: {

  },
  created () {
    HTTP.get('/course/list').then((res) => {
      console.log(res)
    })
  }
}
</script>

<style scoped>
</style>
