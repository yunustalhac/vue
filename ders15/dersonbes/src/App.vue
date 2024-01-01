<template>
  <div>
    <h1>anasayfada vueRouter ile yapılmıştır</h1>

    <router-link style="margin-right: 10px;" to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup>
import router from "@/router/index.js";


</script>

<style lang="scss" scoped>

</style>