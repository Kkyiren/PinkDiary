import http from "./http";

// 商店分类列表数据接口
export function getClassify(params) {
  return http.get("/shop", params);
}
export function getPlanet() {
  return http.get("/planet");
}
//vip专区
export function mallVipnone(a) {
  let obj = http.get("/mall/vipnone", a);
  return obj;
}
//信纸屋
export function mallLetter(a) {
  let obj = http.get("/mall/letter", a);
  return obj;
}
//详情数据页
export function getShopping(a) {
  let obj = http.get("/add/shopping", a);
  return obj;
}
// 我的页面数据
export function getMine(a) {
  let obj = http.get("/Mine", a);
  return obj;
}
