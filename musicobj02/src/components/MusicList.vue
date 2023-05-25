<template>
    <div>
        <h3>发现好歌单</h3>
        <div class="img" v-for="(item,index) in imgs" :key="index">
            <img :src="item.pic" alt="">
            <p>{{ item.name }}</p>
        </div>
    </div>
</template>

<script>
import { getpersonalized } from  '@/api/index.js'
export default {
    name: "musiclist",
    data() {
        return {
            imgs: [{
                pic: require("../images/swiper1.jpg"),
                name:"参数111"
            }],
        }
    },
    async mounted() {
        var res = await getpersonalized(8);
        console.log(res)
        this.imgs[0].pic = res.data.result[0].picUrl;
        this.imgs[0].name = res.data.result[0].name;
        // console.log(this.imgs)
        // this.imgs = res.data.banners;
    }
}
</script>

<style>
.img {
    width: 40%;
}
.img img {
    width: 100%;
}
</style>