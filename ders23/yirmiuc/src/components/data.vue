<template>
  <div>
    <a-table :dataSource="dataSource" :columns="columns"/>

  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios"

const dataSource = ref()
onMounted(() => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
    dataSource.value = response.data
  })
})


const columns = [
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title: 'title',
    dataIndex: 'title',
  },
]
</script>

<style lang="scss" scoped>

</style>