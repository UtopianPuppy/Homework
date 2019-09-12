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
  //    axios({
  //      method: 'get',
  //      url: 'https://easy-mock.com/mock/5d6dd52b7e545d6cb89a4f30/data/course/list'
  //    })
  //      .then((response) => {
  //        console.log(response.data)
  //      })
    //  1 默认使用get方式
  //    axios('https://easy-mock.com/mock/5d6dd52b7e545d6cb89a4f30/data/course/list')
  //      .then((res) => {
  //        console.log(res)
  //      })
  //    axios({
  //      method: 'post',
  //      url: 'https://easy-mock.com/mock/5d6dd52b7e545d6cb89a4f30/data/course/add'
  //    })
  //      .then((res) => {
  //        console.log('post:', res)
  //      })
  //      .catch((err) => {
  //        console.log(err)
  //      })
    //  3 传参
  //    axios({
  //      method: 'get',
  //      url: 'https://easy-mock.com/mock/5d6dd52b7e545d6cb89a4f30/data/course/list',
  //      params: {
  //        title: 'xxx',
  //        count: 30
  //      }
  //    })
  //      .then((response) => {
  //        console.log(response.data)
  //      })
    //  post方法传参
    axios({
      method: 'post',
      url: 'https://easy-mock.com/mock/5d6dd52b7e545d6cb89a4f30/data/course/add',
      data: {
        title: 'xxx',
        count: 80
      }
    })
      .then((res) => {
        console.log('post:', res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
</style>
