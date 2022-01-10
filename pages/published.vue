<template>
  <div class="published">
    <el-form label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="published.title"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="published.description"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" v-model="published.body"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="tj">确认添加</el-button>
  </div>
</template>

<script>
  import { publisheds } from '@/requests/index.js'
  export default{
    name:'published',
    middleware: 'login',
    data(){
      return{
        published:[]
      }
    },
    methods:{
      async tj(){
        let {data} = await publisheds({
          title: this.published.title,
          description: this.published.description,
          body: this.published.body,
          tagList: [
            "Genius can't tag"
          ]
        })
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .published{
    width: 700px;
    min-height: 500px;
    margin: 0px auto;
    padding: 40px 80px 0px 20px;
    background-color: white;
  }
</style>
