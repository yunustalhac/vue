<template>
  <div>

  </div>
</template>

<script setup lang="ts">
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(jsonData => console.log(jsonData))
</script>

<style lang="scss" scoped>

</style>