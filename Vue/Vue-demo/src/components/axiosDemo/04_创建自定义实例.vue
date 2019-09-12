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
