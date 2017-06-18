<style>
  .horizontal-scroll-template {
    background-color: #fff;
  }

  .horizontal-scroll-template .header-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .horizontal-scroll-template .more {
    color: #42bd56;
  }

  .horizontal-scroll-template .scroll-container {
    width: 100%;
    padding-left: 10px;
    overflow-x: scroll;
    white-space: nowrap;
  }

  .horizontal-scroll-template .scroll-item{
    display: inline-block;
    margin-right: 10px;
    vertical-align: top;
  }
</style>

<template>
  <div class="horizontal-scroll-template">
    <div class="header-container">
      <h2>{{headerTitle}}</h2>
      <span class="more">更多</span>
    </div>
    <div class="scroll-container">
      <base-list-item class="scroll-item" v-for="item in datas" :cover="item.cover && item.cover.url" :title="item.title" :star="item.rating && item.rating.value" :key="item.id"></base-list-item>
    </div>
  </div>
</template>

<script>
  import BaseListItem from './BaseListItem.vue'

  export default {
    data () {
      return {
        msg: 'Hello World!'
      }
    },
    props: {
      headerTitle: {
        type: String
      },
      moreLink: {
        type: String
      },
      datas: {
        type: Array
      }
    },
    components: {
      BaseListItem
    }
  }
</script>

