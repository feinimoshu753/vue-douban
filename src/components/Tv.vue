<style>

</style>

<template>
  <div>
    <div class="tv-content">
       电视剧
    </div>
    <tabbar-template :index="2"></tabbar-template>
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

