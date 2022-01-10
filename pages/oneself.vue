<template>
  <div class="oneself">
    <div class="layui-container">
      <div class="layui-row layui-col-space15">
        <div class="layui-col-md8">
          <div class="information">
            <el-form label-width="80px">
              <el-form-item label="头像上传">
                <el-input v-model="user.image"></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="user.email"></el-input>
              </el-form-item>
              <el-form-item label="用户名">
                <el-input v-model="user.username"></el-input>
              </el-form-item>
              <el-form-item label="个人简介">
                <el-input  v-model="user.bio"></el-input>
              </el-form-item>
            </el-form>
            <el-button type="primary" @click="setput">确认修改</el-button>
            <el-button type="danger" @click="cancellation">退出登录</el-button>
          </div>
        </div>
        <div class="layui-col-md4">
          <div class="my">
            <img :src="this.user.image" style="width: 50px;height: 50px;">
            {{this.user.username}}
            <h1>{{this.user.email}}</h1>
            <h4>{{this.user.bio}}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    userset
  } from '@/requests/index.js'
  const Cookie = process.client ? require('js-cookie') : undefined
  export default {
    name: 'oneself',
    middleware: 'login',
    data() {
      return {
        user: []
      }
    },
    created() {
     this.user ={...this.$store.state.user}
      console.log(this.user)
    },
    methods: {
      async setput() {
        let { data } = await userset({
          email: this.user.email,
          username: this.user.username,
          bio:this.user.bio,
          image: this.user.image
        })
       Cookie.remove('user');
       this.$store.commit('login',data.user)
       Cookie.set('user', JSON.stringify(data.user))
      },
      cancellation(){
        Cookie.remove('user');
        this.$store.commit('login',null)
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .oneself {
    margin: 20px 0px;
  }

  .information {
    padding: 40px 80px 0px 20px;
    min-height: 500px;
    background-color: white;
  }

  .my {
    min-height: 300px;
    background-color: white;
  }
</style>
