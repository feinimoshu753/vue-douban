<style>
  .weui-tabbar {
    position: fixed;
  }
</style>

<template>
  <div>
    <tabbar>
      <tabbar-item :link="index === 0 ? '' : '/'" :selected="index === 0">
        <span slot="label">电影</span>
      </tabbar-item>
      <tabbar-item :link="index === 1 ? '' : '/fiction'" :selected="index === 1">
        <span slot="label">图书</span>
      </tabbar-item>
      <tabbar-item :link="index === 2 ? '' : '/tv'" :selected="index === 2">
        <span slot="label">电视剧</span>
      </tabbar-item>
      <tabbar-item :link="index === 3 ? '' : '/music'" :selected="index === 3">
        <span slot="label">音乐</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'

  export default {
    data () {
      return {}
    },
    props: {
      index: {
        type: Number
      }
    },
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

