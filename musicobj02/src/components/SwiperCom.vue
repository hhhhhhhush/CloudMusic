<template>
    <div id="swipercom">
        <div class="swiper-container" id="swiperIndex">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in imgs" :key="index">
                    <img :src="item.pic" alt="">
                </div>
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import 'swiper/css/swiper.css'
import Swiper from 'swiper'
import { getBanner } from "@/api/index.js"  //@指的是项目目录 src
export default {
    name: "swipercom",
    data() {
        return {
            imgs: [{},{},{},{},{},{}],
        }
    },
    async mounted() {
        var res = await getBanner(1);
        // console.log(res.data.banners)
        // console.log(this.imgs)
        this.imgs = res.data.banners;
        // console.log(this.imgs)
        var mySwiper = new Swiper("#swiperIndex", {
            loop:true,
            // el: ".swiper-container",
            // // clickable: true,
            autoplay: true,
            // 分页器   
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        })
    }
}
</script>



<style lang="less">
#swipercom {
    width: 7.5rem;

    #swiperIndex.swiper-container {
        width: 7.1rem;
        height: 2.6rem;
        border-radius: 0.1rem;

        .swiper-slide img {
            width: 100%;
        }

        .swiper-pagination-bullet-active {
            background-color: orangered;
        }

    }
}
</style>