import { instance } from '@/plugins/request.js'

//标签
export let tags = () => {
  return instance.get(`/api/tags`)
}
//文章列表
export let articles = (params) => {
  return instance.get(`/api/articles`, {
    params
  })
}
//获取他人信息
export let profile = (id) => {
  return instance.get(`/api/profiles/${id}`)
}

//获取我关注的文章
export let feed = () => {
  return instance.get(`/api/articles/feed`)
}

//修改信息
export let userset = (user) => {
  return instance.put('/api/user', {
    user
  })
}

//发表文章
export let publisheds = (article) => {
  return instance.post('/api/articles', {
    article
  })
}

//文章点赞
export let favorite = (slug) => {
  return instance.post('/api/articles/'+slug+'/favorite')
}

//文章取消点赞
export let qxfavorite = (slug) => {
  return instance.delete('/api/articles/'+slug+'/favorite')
}


//关注用户
export let follow = (uname) => {
  return instance.post(`/api/profiles/${uname}/follow`)
}

//取消关注用户
export let dfollow = (uname) => {
  return instance.delete(`/api/profiles/${uname}/follow`)
}