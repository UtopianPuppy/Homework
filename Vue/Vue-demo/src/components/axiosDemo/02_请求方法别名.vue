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
    //  别名
    //    axios({
    //      method: 'post',
    //      url: 'https://easy-mock.com/mock/5d6dd52b7e545d6cb89a4f30/data/course/add'
    //    })
    //      .then((res) => {
    //        console.log(res)
    //      })
    //  等价于
    axios.post('https://easy-mock.com/mock/5d6dd52b7e545d6cb89a4f30/data/course/add')
      .then((res) => {
        console.log(res)
      })
    axios.get('https://easy-mock.com/mock/5d6dd52b7e545d6cb89a4f30/data/course/list')
      .then((res) => {
        console.log(res)
      })
  }
}
</script>

<style scoped>
</style>
