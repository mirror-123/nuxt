<template>
  <div>
    <navs></navs>
    <div class="banner">
      <h1 style="text-align: center;font-size: 50px;">conduit</h1>
      <h3 style="text-align: center;">分享你的知识的地方。</h3>
    </div>
    <nuxt />

  </div>
</template>

<script>
  export default {
    name: 'default',
    computed:{
      
    }
  }
</script>

<style scoped>
  .banner {
    height: 150px;
    padding: 20px 0px;
    background-color: #009688;
  }
</style>
