import axios from 'axios'

 let instance = axios.create({
    baseURL: 'http://realworld.api.fed.lagounews.com'
  })

export default ({store,redirect}) => {
  // http request 拦截器
  instance.interceptors.request.use(
    config => {
      if(store.state.user){
         config.headers.Authorization = 'Token ' + store.state.user.token
      }
      return config
    },
    err => {
      return Promise.reject(err)
    })
}
export {instance}
