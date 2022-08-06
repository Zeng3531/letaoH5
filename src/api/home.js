import instance from "./instance.js";

// 获取轮播图
export function fetchLunbo() {
    return instance.get('http://api.w0824.com/api/getlunbo')
}
// 获取商品列表
export function fetchRecommendGoods(page = 2, limit = 15) {
    return instance.get(`api/getgoods?pageindexe=${page}`)
}