<style>

</style>

<template>
  <div>
    <div class="music-content">
        音乐
    </div>
    <tabbar-template :index="3"></tabbar-template>
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

