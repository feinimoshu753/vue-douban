<style>

</style>

<template>
  <div>
    <div class="movie-content">
      <horizontal-scroll-template :header-title="movieShowingData && movieShowingData.subject_collection.name"
                                  more-link="/music/list?type=showing"
                                  :datas="movieShowingData.subject_collection_items"></horizontal-scroll-template>
    </div>

    <tabbar-template :index="0"></tabbar-template>
  </div>
</template>

<script>
  import TabbarTemplate from './TabbarTemplate.vue'
  import HorizontalScrollTemplate from './HorizontalScrollTemplate.vue'
  import apiUtil from '../assets/js/apiUtil'

  export default {
    data () {
      return {
        movieShowingData: ''
      }
    },
    mounted: function () {
      this.loadData()
    },
    components: {
      TabbarTemplate,
      HorizontalScrollTemplate
    },
    methods: {
      loadData: function () {
        this.loadMovieShowingData()
      },
      loadMovieShowingData: function () {
        let context = this
        this.$http.get(apiUtil.urls.movieShowing).then(function (response) {
          context.movieShowingData = response.data
          console.log(context.movieShowingData)
        }).catch(function (e) {
          console.log(e)
        })
      }
    }
  }
</script>

