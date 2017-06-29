<style lang="less">
  @import "../assets/css/common.css";

  .doulist-content {
    background-color: #fff;

    .doulist-header-container {
      padding: 0 10px;
      text-align: center;

      .doulist-title {

      }

      .doulist-author {
        font-size: 15px;
      }

      .doulist-description {
        font-size: 12px;
      }

      .doulist-praise-btn {
        border: 1px solid #42bd56;
        border-radius: 3px;
        color: #42bd56;
        font-size: 12px;
      }
    }
  }
</style>

<template>
  <div class="doulist-content">
    <div class="doulist-header-container">
      <h2 class="doulist-title">标题</h2>
      <p class="doulist-author">作者</p>
      <p class="doulist-description">描述</p>
      <div class="doulist-praise-btn">
        <img
          src="data:image/png;base64,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"
          alt="">
        <span>点赞数</span>
      </div>
    </div>

    <div class="doulist-item">
      <div>
        <img class="doulist-item-cover" src="" alt="">
        <div class="doulist-item-text-container">
          <p class="doulist-item-title">豆列Item标题</p>
          <div class="">
            <div></div>
          </div>
          <p class="doulist-item-origin"></p>
        </div>
      </div>
      <p class="">评语：xxxx</p>
    </div>
  </div>
</template>

<script>

  import apiUtil from '../assets/js/apiUtil'

  export default {
    data () {
      return {
        data: ''
      }
    },
    components: {},
    methods: {
      loadData: function () {
        let context = this
        this.$http.get(apiUtil.urls.doulist).then(function (response) {
          context.data = response.data
        }).catch(function (e) {
          this.$vux.toast.show({text: '请检查网络'})
        })
      }
    }
  }
</script>

