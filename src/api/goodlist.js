import instance from "./instance.js";

export function fetchGoodList(page = 1, pagesize = 11) {
    return instance.get(`http://api.w0824.com/api/getgoods?pageindex=${page}&pagesize=${pagesize}`)
}