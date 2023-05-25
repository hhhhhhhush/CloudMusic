<template>
  <div class="home">
      <!-- 头部导航 -->
      <top-nav></top-nav>
      <!-- 轮播图 -->
      <swiper-com></swiper-com>
      <!-- icon列表 -->
      <icon-list></icon-list>
      <!-- 音乐列表 -->
      <music-list></music-list>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TopNav from '@/components/TopNav.vue'
import IconList from '@/components/IconList.vue'
import SwiperCom from '@/components/SwiperCom.vue'
import MusicList from '@/components/MusicList.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TopNav,
    IconList,
    SwiperCom,
    MusicList
  }
}
</script>

<style>

</style>

