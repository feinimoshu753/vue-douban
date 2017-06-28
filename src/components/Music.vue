<style>
  .music-content {
    padding-bottom: 50px;
  }

  .classification-title {
    padding: 10px;
    background-color: #fff;
  }
</style>

<template>
  <div>
    <div class="music-content">
      <horizontal-scroll-template :header-title="musicChineseData && musicChineseData.subject_collection.name"
                                  more-link="/music/list?type=chinese"
                                  :datas="musicChineseData.subject_collection_items"></horizontal-scroll-template>
      <horizontal-scroll-template :header-title="musicOccidentData && musicOccidentData.subject_collection.name"
                                  more-link="/music/list?type=occident"
                                  :datas="musicOccidentData.subject_collection_items"></horizontal-scroll-template>
      <horizontal-scroll-template :header-title="musicJapanKoreaData && musicJapanKoreaData.subject_collection.name"
                                  more-link="/music/list?type=japan_korea"
                                  :datas="musicJapanKoreaData.subject_collection_items"></horizontal-scroll-template>

      <h2 class="classification-title">发现好音乐</h2>
      <multi-horizontal-scroll-template :datas="musicSpecialClassificationData"></multi-horizontal-scroll-template>

      <h2 class="classification-title">分类浏览</h2>
      <classification-template :datas="musicClassificationData"></classification-template>
    </div>

    <tabbar-template :index="3"></tabbar-template>
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
        musicChineseData: '',
        musicOccidentData: '',
        musicJapanKoreaData: '',
        musicClassificationData: [
          {name: '流行', link: '/music/list?type=pop'},
          {name: '摇滚', link: '/music/list?type=rock'},
          {name: '民谣', link: '/music/list?type=folk'},
          {name: '独立', link: '/music/list?type=indie'},
          {name: '华语', link: '/music/list?type=chinese'},
          {name: '欧美', link: '/music/list?type=western'},
          {name: '日本', link: '/music/list?type=japan'},
          {name: '韩国', link: '/music/list?type=korean'}
        ],
        musicSpecialClassificationData: [
          {name: '當我們听爵士樂，我們在听什麽？', link: '/doulist?id=700224', color: '#3BA94D'},
          {name: 'Grunge of All Time', link: '/doulist?id=1296348', color: '#4F9DED'},
          {name: '2017年第28届金曲奖获奖&入围名单', link: '/doulist?id=45992519', color: '#CC3344'},
          {name: 'Nonesuch,世界音乐的神', link: '/doulist?id=41365', color: '#FFAC2D'},
          {name: '2017年第28届金曲奖获奖&入围名单', link: '/doulist?id=45992519', color: '#FFAC2D'},
          {name: '潮潮 Wetware 豆瓣音乐周', link: '/doulist?id=45982710', color: '#CC33444F9DED'},
          {name: '【滚石】：摇滚史50瞬间', link: '/doulist?id=173655', color: '#4F9DED'},
          {name: '风景派封面——最简单、最无法抗拒', link: '/doulist?id=443538', color: '#3BA94D'}
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
        this.loadMusicChineseData()
        this.loadMusicOccidentData()
        this.loadMusicJapanKoreaData()
      },
      loadMusicChineseData: function () {
        let context = this
        this.$http.get(apiUtil.urls.musicChinese).then(function (response) {
          context.musicChineseData = response.data
        }).catch(function (e) {
          this.$vux.toast.show({text: '请检查网络'})
        })
      },
      loadMusicOccidentData: function () {
        let context = this
        this.$http.get(apiUtil.urls.musicOccident).then(function (response) {
          context.musicOccidentData = response.data
        }).catch(function (e) {
          this.$vux.toast.show({text: '请检查网络'})
        })
      },
      loadMusicJapanKoreaData: function () {
        let context = this
        this.$http.get(apiUtil.urls.musicJapanKorea).then(function (response) {
          context.musicJapanKoreaData = response.data
        }).catch(function (e) {
          this.$vux.toast.show({text: '请检查网络'})
        })
      }
    }
  }
</script>

