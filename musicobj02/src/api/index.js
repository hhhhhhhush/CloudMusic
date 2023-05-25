import axios from 'axios'

const baseUrl = "http://localhost:3000";

// 封装获取轮播图api 调用例子: /banner,/banner?type=2  type=0,1,2,3,4
export function getBanner(type=1) {
    return axios.get(`${baseUrl}/banner?type=${type}`);
}

export function getpersonalized(limit=1){
    return axios.get(`${baseUrl}/personalized?limit=${limit}`);
}
// 对外抛出
export default { getBanner,getpersonalized };