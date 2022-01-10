<template>
  <div class="nav">
    <div class="logo"><nuxt-link to="/">conduit</nuxt-link></div>
    <ul>
      <li v-for="na in navs">
        <img :src="na.img" alt="" style="height: 50px;width: 50px;border-radius: 100%;float: left;" v-if="na.i">
        <nuxt-link :to="na.to">{{na.name}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'publics',
    computed:{
      navs(){
        return this.$store.getters.navslogin
      },
    },
    created() {

    }
  }
</script>

<style scoped>
  .nav {
    height: 50px;
    padding: 0px 20%;
    background-color: #1E9FFF;
  }

  ul {
    height: 100%;
    float: right;
    list-style-type: none;
  }

  li {
    float: left;
    height: 100%;
    min-width: 100px;
    text-align: center;
    font-size: 15px;
    line-height: 50px;
  }

  li:hover {
    background-color: #01AAED;
  }

  .logo {
    list-style-type: none;
    text-align: center;
    font-size: 20px;
    height: 100%;
    line-height: 50px;
    float: left;
  }

  a {
    display: block;
    color: white;
  }
</style>
