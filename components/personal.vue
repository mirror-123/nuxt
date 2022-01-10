<template>
  <div class="personal">
    <img :src="personal.image" style="width: 50px;height: 50px;">
    <h1>{{personal.username}}</h1>
    <h4>{{personal.bio}}</h4>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'personal',
    props: {
      personal: [Array, Object]
    },
  }
</script>

<style scoped>
  .personal{
    height: 300px;
    padding: 15px;
    background-color: white;
  }
</style>
