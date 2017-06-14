<style>

</style>

<template>
  <div>
    <div class="tv-content">
       电视剧
    </div>
    <tabbar>
      <tabbar-item link="/">
        <span slot="label">电影</span>
      </tabbar-item>
      <tabbar-item link="/fiction">
        <span slot="label">图书</span>
      </tabbar-item>
      <tabbar-item :selected="true">
        <span slot="label">电视剧</span>
      </tabbar-item>
      <tabbar-item link="/music">
        <span slot="label">音乐</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'

  export default {
    data () {
      return {
        msg: 'Hello World!'
      }
    },
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

