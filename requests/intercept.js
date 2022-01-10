//弃用 留作纪念

import axios from 'axios'
let instance = axios.create({
  baseURL:'http://realworld.api.fed.lagounews.com'
})

// http request 拦截器
instance.interceptors.request.use(
  config => {
    console.log('拦截器')
      //config.headers.Authorization = 'Token '
    return config
  },
  err => {
    return Promise.reject(err)
  })

export default instance
