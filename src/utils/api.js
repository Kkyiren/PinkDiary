import http from './http'


// 商店分类列表数据接口
export function getClassify(params) {
  return http.get('/shop', params)
}
export function getPlanet() {
  return http.get("/planet");
}
