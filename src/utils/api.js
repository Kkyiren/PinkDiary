import http from './http'


// 商店分类列表数据接口
export function getClassify(params) {
  return http.post('/classify', params)
}
