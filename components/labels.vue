<template>
  <div class="labels">
    <ul>
      <li v-for="label in labels">
        <nuxt-link :to="{
          name:'index',
          query:{
            tag:label,
          }
        }">{{label}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'labels',
    props: {
      labels: [Array, Object]
    },
    created() {}
  }
</script>

<style scoped>
  .labels {
    margin-top: 15px;
    min-height: 300px;
    background-color: white;
    padding: 10px;
  }

  li {
    float: left;
    color: white;
    margin: 5px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #008000;
    user-select: none;
  }
  a{
    color: white;
  }
</style>
