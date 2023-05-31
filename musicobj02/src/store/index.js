import { createStore } from 'vuex'

export default createStore({
  state: {  //组件之间共享的数据
    playlist:[   //音乐播放列表  是一个数组，准备一条默认数据
      {
        name: "给你一瓶魔法药水", 
        id: 1959667345, 
        al:{
          id: 1959667345,
          name: "给你一瓶魔法药水",
          pic: 109951167603798530,
          picUrl: "http://p3.music.126.net/fISwJ705Y1c81EqWxKjNqg==/109951167603798520.jpg",
          pic_str: "109951167603798520",
        }
      } 
    ],
    playCurrentIndex: 0,  //当前播放音乐在音乐列表中的下标
    lyric:`aaa`,  //保存当前播放音乐的歌词
    isLogin:false

  },
  getters: {
  },
  mutations: {
    setPlayList(state,value) {  //定义一个函数，用来修改sate中播放列表的数据
      state.playlist = value;
    },
    setPlayIndex(state,value) { //定义一个函数，用来修改sate中当前正在播放歌曲的下标
      state.playCurrentIndex = value;
    },
    setLyric(state,value) {  //定义一个函数，用来修改当前播放音乐的歌词
      state.lyric = value;
    },
    pushPlaylist(state,value) { //定义了一个函数在playlist末尾追加一条数据
      state.playlist.push(value);
    }
  },
  actions: {
  },
  modules: {
  }
})
