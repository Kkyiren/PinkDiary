import http from './http';

//vip专区
export function mallVipnone(a) {
    let obj = http.get('/mall/vipnone', a)
    return obj

}
//信纸屋
export function mallLetter(a) {
    let obj = http.get('/mall/letter', a)
    return obj

}