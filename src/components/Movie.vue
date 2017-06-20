<style>
  .movie-content {
    padding-bottom: 50px;
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
      <classification-template :datas="movieClassificationData"></classification-template>
    </div>

    <tabbar-template :index="0"></tabbar-template>
  </div>
</template>

<script>
  import TabbarTemplate from './TabbarTemplate.vue'
  import HorizontalScrollTemplate from './HorizontalScrollTemplate.vue'
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
          {name: '冷门佳片', link: '/movie/list?type=underrated'}
        ]
      }
    },
    mounted: function () {
      this.loadData()
    },
    components: {
      TabbarTemplate,
      HorizontalScrollTemplate,
      ClassificationTemplate
    },
    methods: {
      loadData: function () {
        this.loadMovieShowingData()
        this.loadMovieFreeData()
        this.loadMovielatestData()
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
      loadMovielatestData: function () {
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

