<style lang="less">
  .multi-horizontal-scroll-template {
    width: 100%;
    padding-left: 10px;
    overflow-x: scroll;
    white-space: nowrap;
    background-color: #fff;

    .scroll-item {
      display: inline-block;
      padding: 10px 15px;
      margin-right: 10px;
      vertical-align: top;
      border-radius: 3px;
      font-size: 14px;
      text-decoration: none;
      border: 1px solid #42bd56;
      color: #42bd56;
    }

    .switch-line{
      padding: 5px 0;
    }
  }
</style>

<template>
  <div class="multi-horizontal-scroll-template">
    <template v-for="(item,index) in datas">
      <router-link class="scroll-item" :to="item.link" :key="item.id" :style="'color: ' + item.color + ';border-color: ' + item.color">
        {{item.name}}
      </router-link>
      <div class="switch-line" v-if="index % 4 === 3"></div>
    </template>
  </div>
</template>

<script>

  export default {
    data () {
      return {}
    },
    props: {
      datas: {
        type: Array
      }
    },
    components: {}
  }
</script>

