<style>
  .tv-content {
    padding-bottom: 50px;
  }

  .classification-title {
    padding: 10px;
    background-color: #fff;
  }
</style>

<template>
  <div>
    <div class="tv-content">
      <horizontal-scroll-template :header-title="tvDomesticData && tvDomesticData.subject_collection.name"
                                  more-link="/tv/list?type=domestic"
                                  :datas="tvDomesticData.subject_collection_items"></horizontal-scroll-template>
      <horizontal-scroll-template :header-title="tvVarietyShowData && tvVarietyShowData.subject_collection.name"
                                  more-link="/tv/list?type=varietyShow"
                                  :datas="tvVarietyShowData.subject_collection_items"></horizontal-scroll-template>
      <horizontal-scroll-template :header-title="tvAmericanData && tvAmericanData.subject_collection.name"
                                  more-link="/tv/list?type=american"
                                  :datas="tvAmericanData.subject_collection_items"></horizontal-scroll-template>

      <h2 class="classification-title">发现好电视剧</h2>
      <multi-horizontal-scroll-template :datas="tvSpecialClassificationData"></multi-horizontal-scroll-template>

      <h2 class="classification-title">分类浏览</h2>
      <classification-template :datas="tvClassificationData"></classification-template>
    </div>

    <tabbar-template :index="2"></tabbar-template>
  </div>
</template>

<script>
  import TabbarTemplate from './TabbarTemplate.vue'
  import HorizontalScrollTemplate from './HorizontalScrollTemplate.vue'
  import MultiHorizontalScrollTemplate from './MultiHorizontalScrollTemplate.vue'
  import ClassificationTemplate from './ClassificationTemplate.vue'
  import apiUtil from '../assets/js/apiUtil'

  export default {
    data () {
      return {
        tvDomesticData: '',
        tvVarietyShowData: '',
        tvAmericanData: '',
        tvClassificationData: [
          {name: '美剧', link: '/tv/list?type=american'},
          {name: '英剧', link: '/tv/list?type=british'},
          {name: '韩剧', link: '/tv/list?type=korean'},
          {name: '国产剧', link: '/tv/list?type=chinese'},
          {name: '港剧', link: '/tv/list?type=hongkong'},
          {name: '日剧', link: '/tv/list?type=japanese'},
          {name: '动漫', link: '/tv/list?type=animation'},
          {name: '综艺', link: '/tv/list?type=tvshow'}
        ],
        tvSpecialClassificationData: [
          {name: '国产历史剧', link: '/doulist?id=37957022', color: '#3BA94D'},
          {name: '豆瓣7.5分以上泰劇', link: '/doulist?id=19387465', color: '#4F9DED'},
          {name: '超级热门日剧（评价人数≥10000）', link: '/doulist?id=3151243', color: '#CC3344'},
          {name: '无聊的话就刷刷剧吧~', link: '/doulist?id=3990148', color: '#FFAC2D'},
          {name: '每个故事都有特定的意义【日剧篇】', link: '/doulist?id=3907668', color: '#FFAC2D'},
          {name: '【AMC】美国经典电影有线电视台', link: '/doulist?id=13706931', color: '#CC33444F9DED'},
          {name: '有些剧让我觉得比有些电影牛逼', link: '/doulist?id=249984', color: '#4F9DED'},
          {name: '被人遗忘的角落--英伦风', link: '/doulist?id=521464', color: '#3BA94D'}
        ]
      }
    },
    mounted: function () {
      this.loadData()
    },
    components: {
      TabbarTemplate,
      HorizontalScrollTemplate,
      MultiHorizontalScrollTemplate,
      ClassificationTemplate
    },
    methods: {
      loadData: function () {
        this.loadTvDomesticData()
        this.loadTvVarietyShowData()
        this.loadTvAmericanData()
      },
      loadTvDomesticData: function () {
        let context = this
        this.$http.get(apiUtil.urls.tvDomestic).then(function (response) {
          context.tvDomesticData = response.data
        }).catch(function (e) {
          this.$vux.toast.show({text: '请检查网络'})
        })
      },
      loadTvVarietyShowData: function () {
        let context = this
        this.$http.get(apiUtil.urls.tvVarietyShow).then(function (response) {
          context.tvVarietyShowData = response.data
        }).catch(function (e) {
          this.$vux.toast.show({text: '请检查网络'})
        })
      },
      loadTvAmericanData: function () {
        let context = this
        this.$http.get(apiUtil.urls.tvAmerican).then(function (response) {
          context.tvAmericanData = response.data
        }).catch(function (e) {
          this.$vux.toast.show({text: '请检查网络'})
        })
      }
    }
  }
</script>

