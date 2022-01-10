<template>
  <div class="lieb">
    <div class="bq">
      <div :class="{quanb:'quanb',active:active == 1}" @click="qb">
        <nuxt-link to='/'>全部</nuxt-link>
      </div>
      <div :class="{quanb:'quanb',active:active==2}" @click="gz" v-if="this.$store.state.user">
       关注的
      </div>
      <div :class="{quanb:'quanb',active:active==3}" @click="wdwz" v-if="this.$store.state.user">
        我的文章
      </div>
      <div :class="{quanb:'quanb',active:'active'}"  v-if="this.$route.query.tag">
       #{{this.$route.query.tag}}
      </div>
    </div>
    <ul>
      <li v-for="article in articles">
        <img :src="article.author.image" style="height: 50px;width: 50px;">
        <nuxt-link :to="'/profile/'+article.author.username">{{article.author.username}}</nuxt-link>
        <p>{{article.createdAt | date('MMM DD,YYYY')}}</p>
        <h1>
          <nuxt-link :to="'/article/'+article.slug">{{article.title}}</nuxt-link>
        </h1>
        <p>{{article.description}}</p>
        <el-button :type="article.favorited ? 'success':''" round  @click="dianzan(article.slug,article)" :class="article.favorited ? 'el-icon-star-on':'el-icon-star-off'" style="font-size: 20px;line-height: 50px; user-select: none;">
          {{article.favoritesCount}}个点赞
        </el-button>
      </li>
    </ul>
  </div>
</template>

<script>
  import dayjs from 'dayjs'
  //favorited :disabled="dianz"
  export default {
    name: 'lieb',
    data() {
      return {
        active: 1,
        dianz:false
      }
    },
    props: {
      articles: [Array, Object],
    },
    methods: {
      gz(e) {
        this.active = 2
        this.$emit('gz')
      },
      qb() {
        this.active = 1
        this.$emit('qb')
      },
      wdwz() {
        this.active = 3
        this.$emit('wdwz')
      },
      dianzan(slug,article){
        if(article.favorited){
          this.$emit('qxdianzan',slug,article)
        }else{
          this.$emit('dianzan',slug,article)
        }

      }
    }
  }
</script>

<style scoped>
  li {
    background-color: white;
    padding: 5px;
    border-radius: 5px;
    min-height: 200px;
    margin-bottom: 10px;
  }

  .bq {
    margin-bottom: 10px;
    height: 30px;
  }

  .lieb {
    margin: 10px 0px;
  }

  .quanb {
    height: 100%;
    width: 100px;
    text-align: center;
    line-height: 25px;
    float: left;
    user-select: none;
  }

  .active {
    border-bottom: 2px solid black;
  }
</style>
