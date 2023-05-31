<template>
    <div class="playController">
        <div class="left">
            <img :src="playlist[playCurrentIndex].al.picUrl" alt="" @click="show =! show">
            <div class="content">
                <div class="title">{{ playlist[playCurrentIndex].name}}</div>
                <div class="tips">横划可以切换上下首哦</div>
            </div>
        </div>
        <div class="right">
            <svg class="icon" aria-hidden="true" @click="play" v-if="obvious">
                <use xlink:href="#icon-bofang1"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="play" v-else>
                <use xlink:href="#icon-iconstop"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao1"></use>
            </svg>
        </div>
        <!-- 歌曲详情页面 -->
        <play-music v-show="show" :obvious="obvious" :play="play" :playDetail="playlist[playCurrentIndex]" @back="show =!show"></play-music>
        <!-- 如何获取播放歌曲的mp3地址  https://music.163.com/song/media/outer/url?id=167937.mp3-->
        <!-- controls audio标签属性 一般不显示 -->
        <!-- audio play()播放音乐  pause()暂停音乐 -->
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import PlayMusic from "@/components/PlayMusic.vue";
import { getMusicLyric } from '@/api/index.js';
import store from '@/store/index.js'
export default {
    name: "playcontroller",
    data() {
        return {
            obvious:true,  //控制标签的显示与隐藏
            show: false
        }
    },
    components: {
        PlayMusic
    },
    computed: {
        ...mapState(["playlist","playCurrentIndex"])  //获取正在播放歌曲列表，以及正在播放歌曲下标
    },
    methods: {
        play() { //当前audio处于暂停状态
            if( this.$refs.audio.paused )  //paused属性是可读属性，返回boolean值：若音频是暂停状态，返回true；反之返回false
            {
                // this.$refs.audio 获取audio标签
                this.$refs.audio.play();  //函数 让歌曲播放
                this.obvious = false;
            }
            else //当前audio处于播放状态
            {
                this.$refs.audio.pause(); //函数 让歌曲暂停
                this.obvious = true;
            }
            
        }
    },
    async mounted() { //view与model绑定成功之后
        var res = await getMusicLyric(this.playlist[this.playCurrentIndex].id);
        // console.log(res);
        let musicLyric = res.data.lrc.lyric.replace(/\n/g, '<br>');
        store.commit("setLyric",musicLyric);  //修改状态管理库中的歌词
    },
    async updated() { //view与model数据更新之后
        var res = await getMusicLyric(this.playlist[this.playCurrentIndex].id);
        console.log(res); 
        let musicLyric = res.data.lrc.lyric.replace(/\n/g, '<br>');
        store.commit("setLyric",musicLyric);  //修改状态管理库中的歌词
    }
}
</script>

<style lang="less" scoped>
        .playController {
            background: #fff;
            width: 7.5rem;
            height: 1.2rem;
            position: fixed;
            left: 0;
            bottom: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #ccc;
        
            .left {
                display: flex;
                padding: 0 0.2rem;
        
                img {
                    width: 0.8rem;
                    height: 0.8rem;
                    border-radius: 0.4rem;
                }
        
                .content {
                    padding: 0 0.2rem;
        
                    .tips {
                        font-size: 0.2rem;
                        color: #999;
                    }
                }
            }
        
            .right {
                .icon {
                    width: 0.4rem;
                    height: 0.4rem;
                    margin: 0 0.2rem;
                }
            }
        }
        </style>
