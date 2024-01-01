<template>
  <div>
    <h1>ana sayfa</h1>


    <router-link class="box" to="/">anasayfa</router-link>
    <router-link class="box" to="/birinciders">birinci</router-link>
    <router-link class="box" to="/ikinciders">ikinci</router-link>
    <router-link class="box" to="/dersuc">üçüncü</router-link>
    <router-link class="box" to="/dorduncuders">dördüncü</router-link>
    <router-link class="box" to="/besinciders">beşinci</router-link>
    <router-link class="box" to="/dersalti">altinci</router-link>
    <router-link class="box" to="/dersyedi">yedinci</router-link>
    <router-link class="box" to="/dersekiz">sekizinci</router-link>
    <router-link class="box" to="/dersdokuz">dokuzuncu</router-link>
    <router-link class="box" to="/derson">onuncu</router-link>
    <router-link class="box" to="/onbir">onbirinci</router-link>
    <router-link class="box" to="/oniki">onikinci</router-link>
    <router-link class="box" to="/onuc">onüçüncü</router-link>
    <router-link class="box" to="/ondort">ondördüncü</router-link>
    <router-view></router-view>


  </div>
</template>

<script setup lang="ts">
</script>

<style>
* {
  user-select: none;
}

.box {
  border-left: 2px solid black;
}
</style>