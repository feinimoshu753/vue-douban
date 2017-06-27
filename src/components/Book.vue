<style>
  .book-content {
    padding-bottom: 50px;
  }

  .classification-title {
    padding: 10px;
    background-color: #fff;
  }
</style>

<template>
  <div>
    <div class="book-content">
      <horizontal-scroll-template :header-title="bookFictionData && bookFictionData.subject_collection.name"
                                  more-link="/book/list?type=fiction"
                                  :datas="bookFictionData.subject_collection_items"></horizontal-scroll-template>
      <horizontal-scroll-template :header-title="bookNonfictionData && bookNonfictionData.subject_collection.name"
                                  more-link="/book/list?type=nonfiction"
                                  :datas="bookNonfictionData.subject_collection_items"></horizontal-scroll-template>
      <horizontal-scroll-template :header-title="bookMarketProductData && bookMarketProductData.subject_collection.name"
                                  more-link="/book/list?type=marketProduct"
                                  :datas="bookMarketProductData.subject_collection_items"></horizontal-scroll-template>

      <h2 class="classification-title">发现好图书</h2>
      <multi-horizontal-scroll-template :datas="bookSpecialClassificationData"></multi-horizontal-scroll-template>

      <h2 class="classification-title">分类浏览</h2>
      <classification-template :datas="bookClassificationData"></classification-template>
    </div>

    <tabbar-template :index="1"></tabbar-template>
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
        bookFictionData: '',
        bookNonfictionData: '',
        bookMarketProductData: '',
        bookClassificationData: [
          {name: '小说', link: '/book/list?type=novel'},
          {name: '爱情', link: '/book/list?type=love'},
          {name: '历史', link: '/book/list?type=history'},
          {name: '外国文学', link: '/book/list?type=foreign'},
          {name: '青春', link: '/book/list?type=youth'},
          {name: '励志', link: '/book/list?type=motivation'},
          {name: '随笔', link: '/book/list?type=essay'},
          {name: '传记', link: '/book/list?type=bio'},
          {name: '推理', link: '/book/list?type=detective'},
          {name: '旅行', link: '/book/list?type=travel'},
          {name: '奇幻', link: '/book/list?type=fantasy'},
          {name: '经管', link: '/book/list?type=business'}
        ],
        bookSpecialClassificationData: [
          {name: '小波看书', link: '/doulist?id=10372', color: '#3BA94D'},
          {name: '村上春树周边', link: '/doulist?id=105583', color: '#4F9DED'},
          {name: '我凭名字认定了你', link: '/doulist?id=99294', color: '#CC3344'},
          {name: '不可饶恕的女人们', link: '/doulist?id=35573', color: '#FFAC2D'},
          {name: '爱欲书', link: '/doulist?id=38088147', color: '#FFAC2D'},
          {name: '他们还写侦探小说', link: '/doulist?id=645579', color: '#CC33444F9DED'},
          {name: '人生识字始忧患', link: '/doulist?id=192653', color: '#4F9DED'},
          {name: '詩歌書店', link: '/doulist?id=89925', color: '#3BA94D'}
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
        this.loadBookFictionData()
        this.loadBookNonfictionData()
        this.loadBookMarketProductData()
      },
      loadBookFictionData: function () {
        let context = this
        this.$http.get(apiUtil.urls.bookFiction).then(function (response) {
          context.bookFictionData = response.data
        }).catch(function (e) {
          this.$vux.toast.show({text: '请检查网络'})
        })
      },
      loadBookNonfictionData: function () {
        let context = this
        this.$http.get(apiUtil.urls.bookNonfiction).then(function (response) {
          context.bookNonfictionData = response.data
        }).catch(function (e) {
          this.$vux.toast.show({text: '请检查网络'})
        })
      },
      loadBookMarketProductData: function () {
        let context = this
        this.$http.get(apiUtil.urls.bookMarketProduct).then(function (response) {
          context.bookMarketProductData = response.data
        }).catch(function (e) {
          this.$vux.toast.show({text: '请检查网络'})
        })
      }
    }
  }
</script>

