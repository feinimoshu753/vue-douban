<style>
  .movie-content {
    padding-bottom: 50px;
  }

  .classification-title {
    padding: 10px;
    background-color: #fff;
  }
</style>

<template>
  <div>
    <div class="movie-content">
      <horizontal-scroll-template :header-title="movieShowingData && movieShowingData.subject_collection.name"
                                  more-link="/music/list?type=showing"
                                  :datas="movieShowingData.subject_collection_items"></horizontal-scroll-template>
      <horizontal-scroll-template :header-title="movieFreeData && movieFreeData.subject_collection.name"
                                  more-link="/music/list?type=free"
                                  :datas="movieFreeData.subject_collection_items"></horizontal-scroll-template>
      <horizontal-scroll-template :header-title="movieLatestData && movieLatestData.subject_collection.name"
                                  more-link="/music/list?type=latest"
                                  :datas="movieLatestData.subject_collection_items"></horizontal-scroll-template>

      <h2 class="classification-title">发现好电影</h2>
      <multi-horizontal-scroll-template :datas="movieSpecialClassificationData"></multi-horizontal-scroll-template>

      <h2 class="classification-title">分类浏览</h2>
      <classification-template :datas="movieClassificationData"></classification-template>
    </div>

    <tabbar-template :index="0"></tabbar-template>
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
        movieShowingData: '',
        movieFreeData: '',
        movieLatestData: '',
        movieClassificationData: [
          {name: '经典', link: '/movie/list?type=classic'},
          {name: '冷门佳片', link: '/movie/list?type=underrated'},
          {name: '豆瓣高分', link: '/movie/list?type=doubantop'},
          {name: '动作', link: '/movie/list?type=action'},
          {name: '喜剧', link: '/movie/list?type=comedy'},
          {name: '爱情', link: '/movie/list?type=love'},
          {name: '悬疑', link: '/movie/list?type=mystery'},
          {name: '恐怖', link: '/movie/list?type=horror'},
          {name: '科幻', link: '/movie/list?type=scifi'},
          {name: '治愈', link: '/movie/list?type=sweet'},
          {name: '文艺', link: '/movie/list?type=artfilm'},
          {name: '成长', link: '/movie/list?type=youth'},
          {name: '动画', link: '/movie/list?type=animation'},
          {name: '华语', link: '/movie/list?type=chinese'},
          {name: '欧美', link: '/movie/list?type=western'},
          {name: '韩国', link: '/movie/list?type=korean'},
          {name: '日本', link: '/movie/list?type=japanese'}
        ],
        movieSpecialClassificationData: [
          {name: '同时入选IMDB250和豆瓣电影250的电影', link: '/doulist?id=968362', color: '#3BA94D'},
          {name: '带你进入不正常的世界', link: '/doulist?id=16002', color: '#4F9DED'},
          {name: '用电【影】来祭奠逝去的岁月', link: '/doulist?id=190343', color: '#CC3344'},
          {name: '女孩们的故事【电影】', link: '/doulist?id=1125971', color: '#FFAC2D'},
          {name: '科幻是未来的钥匙——科幻启示录【科幻题材】', link: '/doulist?id=4253902', color: '#FFAC2D'},
          {name: '美国生活面面观', link: '/doulist?id=121326', color: '#CC33444F9DED'},
          {name: '2015终极期待', link: '/doulist?id=37479562', color: '#4F9DED'},
          {name: '经典韩国电影——收集100部', link: '/doulist?id=458087', color: '#3BA94D'}
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
        this.loadMovieShowingData()
        this.loadMovieFreeData()
        this.loadMovieLatestData()
      },
      loadMovieShowingData: function () {
        let context = this
        this.$http.get(apiUtil.urls.movieShowing).then(function (response) {
          context.movieShowingData = response.data
        }).catch(function (e) {
          this.$vux.toast.show({text: '请检查网络'})
        })
      },
      loadMovieFreeData: function () {
        let context = this
        this.$http.get(apiUtil.urls.movieFree).then(function (response) {
          context.movieFreeData = response.data
        }).catch(function (e) {
          this.$vux.toast.show({text: '请检查网络'})
        })
      },
      loadMovieLatestData: function () {
        let context = this
        this.$http.get(apiUtil.urls.movieLatest).then(function (response) {
          context.movieLatestData = response.data
        }).catch(function (e) {
          this.$vux.toast.show({text: '请检查网络'})
        })
      }
    }
  }
</script>

