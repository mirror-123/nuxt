<template>
  <div class="registered">
    <el-form  label-width="80px" >
      <el-form-item label="用户名">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="user.email"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="user.password"></el-input>
      </el-form-item>
    </el-form>
      <el-button type="primary" @click="zhuc">确认注册</el-button>
  </div>
</template>

<script>
  // bynb 123789@qq.com 123456
   import axios from 'axios'
  export default {
    name:'registered',
    data(){
      return{
        user:[],
      }
    },
    created() {
     // console.log(this.$store.state.user)
    },
    methods:{
      zhuc(){
         axios.post('/api/users',{
          user:{
            username:this.user.username,
            email:this.user.email,
            password:this.user.password
          }
        }).then(aaa=>{
           this.$store.commit('login',aaa.data.user)
           this.$router.push('/')
        })
      }
    }
  }
</script>

<style scoped>
  .registered{
    margin: 0px auto;
    padding: 50px;
    width: 800px;
    border: 1px solid #000000;
    background-color: white;
  }
</style>
