<template>
  <div class="articles" v-html="article.body">

  </div>
</template>

<script>
  import axios from 'axios'
  import markdownit from 'markdown-it'
  export default {
    //xlnzqqxvnl-fyrdug-jtklcwo-dnjo97
    name:'articles',
    async asyncData(context) {
    let {data} = await axios.get('http://realworld.api.fed.lagounews.com/api/articles/'+context.route.params.id)
     let {article} = data;
     let md = new markdownit();
     article.body = md.render(article.body)
     return{
       article
     }
    }
  }
</script>

<style scoped>
  .articles{
    width: 700px;
    margin: 20px auto;
    padding: 15px;
    min-height: 500px;
    border-radius: 5px;
    background-color: white;
  }
</style>
