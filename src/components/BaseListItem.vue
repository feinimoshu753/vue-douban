<style>
  .base-list-item .cover {
    width: 100px;
    height: 143px;
  }

  .base-list-item .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .base-list-item .dart-star {
    display: inline-block;
    width: 60px;
    height: 11px;
    background-size: cover;
    background-image: url('../assets/img/pic_star_dark.png');
  }

  .base-list-item .light-star {
    display: inline-block;
    width: 60px;
    height: 11px;
    background-size: cover;
    vertical-align: top;
    background-image: url('../assets/img/pic_star_light.png');
  }

  .base-list-item .star-number {
    color: #aaa;
    vertical-align: text-bottom;
  }
</style>

<template>
  <div class="base-list-item">
    <img class="cover" :src="cover" alt="cover">
    <p class="title">{{title}}</p>
    <div v-if="star">
      <span class="dart-star"><span class="light-star" :style="'width:' + starWidth + 'px'"></span></span>
      <span class="star-number">{{star}}</span>
    </div>
    <p v-else>暂无评星</p>
  </div>
</template>

<script>

  export default {
    data () {
      return {}
    },
    props: {
      cover: {
        type: String
      },
      title: {
        type: String
      },
      star: {
        type: Number
      }
    },
    components: {},
    computed: {
      starWidth: function () {
        if (this.star < 0) {
          return 0
        } else if (this.star > 10) {
          return 10
        } else {
          return (this.star / 10 * 60).toFixed(1)
        }
      }
    }
  }
</script>

