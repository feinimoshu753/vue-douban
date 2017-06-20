<style>
  .classification-template-container .classification-item {
    display: inline-block;
    width: 50%;
    padding: 5px 10px;
    border-top: 1px solid #eee;
    border-right: 1px solid #eee;
    overflow: hidden;
    background-color: #fff;
  }

  .classification-template-container .classification-name {
    color: #42bd56;
    float: left;
  }

  .classification-template-container .classification-arrow {
    color: #ccc;
    float: right;
    font-weight: bold;
    display: inline-block;
    border-right: solid 1px #ccc;
    border-bottom: solid 1px #ccc;
    width: 10px;
    height: 10px;
    transform: rotate(-45deg);
    margin-top: 5px;
  }
</style>

<template>
  <div class="classification-template-container">
    <a :href="item.link" class="classification-item" v-for="item in datas">
      <p class="classification-name">{{item.name}}</p>
      <span class="classification-arrow"></span>
    </a>
  </div>
</template>

<script>

  export default {
    data () {
      return {}
    },
    props: {
      datas: {
        type: Array,
        default: []
      }
    },
    components: {}
  }
</script>

