<template>
    <div>
        <!-- 歌单详情 -->
        <list-view-top :playlist="music.playlist"></list-view-top>
        <!-- 歌曲列表 -->
        <play-list :playlist="music.playlist"></play-list>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { onMounted, reactive } from 'vue';
import { getMusicDetail } from '@/api/index.js'; //@就是src目录
import ListViewTop from '@/components/ListViewTop.vue'
import PlayList from '@/components/PlayList.vue'
export default {
    name: "listview",
    setup() {
        var route = useRoute(); //当前路由信息对象 等价于 $route
        var music = reactive({
            list:[],
            playlist:{
                creator: {}, //歌单详情
                tracks: [] //播放列表
            }
        })
        onMounted(async ()=> {
            const id = route.query.id;  //当前歌单id
            // console.log(id);
            const res = await getMusicDetail(id) //发送axios请求，获取歌单详情
            console.log(res.data)
            // musiclis.musics = res.data.result;
            music.playlist = res.data.playlist;  //将获取的数据放到响应式数据中
            console.log(music.playlist)
        })

        return {
            music
        }
    },
    components: {
        ListViewTop,
        PlayList
    }
}
</script>