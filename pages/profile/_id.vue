<template>
  <div class="profile">
    <div class="layui-container">
      <div class="layui-row layui-col-space15">
        <div class="layui-col-md9">
          <div class="information">
            <lieb :articles="article"></lieb>
          </div>
        </div>
        <div class="layui-col-md3">
          <personal :personal="profile">
            <el-button v-if="!profile.following" @click="guanzhu">关注</el-button>
            <el-button type="success" v-else @click="qxguanzhu">取消关注</el-button>
          </personal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //context.route.params.id
  ///api/articles/feed
  import {profile,articles,follow,dfollow} from '@/requests/index.js'
  export default {
    name:'profile',
    middleware: 'login',
    async asyncData(context){
      let id = context.route.params.id
      let {data} = await profile(id);
      let {data:article} = await articles({
         author: id
      })
      return{
        profile:data.profile,
        article:article.articles,
      }
    },
    methods:{
      async guanzhu(){
        let {data} = await follow(this.profile.username)
        this.profile = data.profile
      },
      async qxguanzhu(){
        let {data} = await dfollow(this.profile.username)
        this.profile = data.profile
      }
    }
  }
</script>

<style scoped>
  .information{
    min-height: 500px;
  }
</style>
