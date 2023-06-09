import axios from 'axios'

const baseUrl = "http://localhost:3000";

// 封装获取轮播图api 调用例子: /banner,/banner?type=2  type=0,1,2,3,4
export function getBanner(type=1) {
    return axios.get(`${baseUrl}/banner?type=${type}`);
}

//封装音乐列表
export function getpersonalized(limit=1){
    return axios.get(`${baseUrl}/personalized?limit=${limit}`);
}

//封装歌单详情
export function getMusicDetail(id){
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`);
}

//封装获取歌词api   调用例子 : /lyric?id=33894312
export function getMusicLyric(id){
    return axios.get(`${baseUrl}/lyric?id=${id}`);
}

//封装搜索歌曲api   调用例子 : /search?keywords=海阔天空 /cloudsearch?keywords=海阔天空
export function searchMusic(keywords){
    return axios.get(`${baseUrl}/search?keywords=${keywords}`);
}
// 对外抛出
export default { getBanner,getpersonalized,getMusicDetail,getMusicLyric,searchMusic  };