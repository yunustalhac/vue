<script setup>
import yirmibir from "../../../../ders21/dersyirmibir/src/App.vue"
import yirmibirRouter from "../../../../ders21/dersyirmibir/src/router/index.js"
</script>

<template>
  <yirmibir/>
  <router-link :to="yirmibirRouter">bismillah</router-link>
  <router-view/>
</template>

<style scoped>

</style>