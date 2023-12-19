<template>
  <div>
    <h1>ana sayfa</h1>


    <router-link to="/">anasayfa</router-link>
    <router-link to="/birinciders">birinci</router-link>
    <router-link to="/ikinciders">ikinci</router-link>
    <router-link to="/dersuc">üçüncü</router-link>
    <router-link to="/dorduncuders">dördüncü</router-link>
    <router-link to="/besinciders">beşinci</router-link>
    <router-view></router-view>


  </div>
</template>

<script setup lang="ts">
</script>

<style>
* {
  user-select: none;
}
</style>