<template>
  <div class="index">
    <div class="layui-container">
      <div class="layui-row layui-col-space15">
        <div class="layui-col-md9">
          <lieb :articles="articles" @gz="gz" @qb="qb" @wdwz="wdwz" @dianzan="dianzan" @qxdianzan="qxdianzan" ></lieb>
          <div class="paging">
            <ul>
              <li v-for="pagings in paging" v-if="sfzy">
                <nuxt-link :to="'/?offset='+pagings">{{pagings}}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="layui-col-md3">
          <labels :labels="labels"></labels>
        </div>
      </div>
    </div>
    <nuxt />
  </div>

</template>

<script>
  //123456777@qq.com 123456
  //slug
  import {
    tags,
    articles,
    feed,
    favorite,
    qxfavorite
  } from '@/requests/index.js'
  export default {
    name: 'index',
    watchQuery: ['tag','limit','offset'],
    async asyncData(context) {
      let limit = context.route.query.limit ? context.route.query.limit:5
      let { data: labels } = await tags()
      let { data } = await articles({
        tag: context.route.query.tag,
        limit,
        offset:context.route.query.offset - 1
      })
      let paging = Math.ceil(data.articlesCount / limit) > 10 ?  10 : Math.ceil(data.articlesCount / limit)
      return {
        articles: data.articles,
        labels: labels.tags.slice(0, 20),
        limit,
        paging,
        sfzy:true
      }
    },
    methods: {
      async gz() {
        let { data } = await feed()
        this.articles = data.articles
        this.sfzy = false
      },
      async qb() {
        let { data } = await articles({
          limit:5
        })
        this.articles = data.articles
        this.sfzy = true
      },
      async wdwz(){
        let {data} = await articles({
           author: this.$store.state.user.username
        })
        this.articles = data.articles
        this.sfzy = false
      },
      async dianzan(slug,article){
        try{
          let {data} = await favorite(slug);
        article.favorited = true
         article.favoritesCount +=  1
        }catch{
          this.$confirm('你还未登录，点击确认跳转登录页面','未登录',{
            confirmButtonText: '确认',
            cancelButtonText: '取消',
          }).then(() => {
          this.$router.push('/login')
        })
        }
      },
      async qxdianzan(slug,article){
        let {data} = await qxfavorite(slug);
        article.favorited = false
        article.favoritesCount -=  1
      }

    }
  }
</script>
<style scoped>
  .paging ul li{
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 3px;
    float: left;
    margin-right:5px;
    background-color: white;
  }
</style>
