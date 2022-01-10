<template>
  <div class="login">
    <el-form  label-width="80px" >
      <el-form-item label="邮箱">
        <el-input v-model="user.email"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="user.password"></el-input>
      </el-form-item>
    </el-form>
      <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
  const Cookie = process.client ? require('js-cookie') : undefined
  import axios from 'axios'
  export default {
    name:'login',
    data(){
      return{
        user:[]
      }
    },
    methods:{
      async login(){
        try{
          let {data} = await axios.post('http://realworld.api.fed.lagounews.com/api/users/login',{
              user:{
                email:this.user.email,
                password:this.user.password
              }
            })
            console.log(data.user)
            this.$store.commit('login',data.user)
            Cookie.set('user', JSON.stringify(data.user))
            this.$router.push('/')
        }catch{

        }
      }
    }
  }
</script>

<style scoped>
  .login{
    margin: 20px auto;
    padding: 50px;
    width: 800px;
    border-radius: 5px;
    background-color: white;
  }
</style>
