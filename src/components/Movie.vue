<style>

</style>

<template>
  <div>
    <div class="movie-content">
      电影
    </div>

    <tabbar-template :index="0"></tabbar-template>
  </div>
</template>

<script>
  import TabbarTemplate from './TabbarTemplate.vue'

  export default {
    data () {
      return {
        msg: 'Hello World!'
      }
    },
    components: {
      TabbarTemplate
    }
  }
</script>

