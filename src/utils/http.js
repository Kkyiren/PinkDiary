import axios from "axios";
var instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/4eac5e4965b9d828cfdb88386ac0e191/fenfen/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});
const http = {
  get(url) {
    return new Promise((resolve, reject) => {
      instance.get(url)
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        })
    });
  }
}
export default http;