<template>
  <div>

    <p v-for="veri in data">{{ veri  }}</p>
    <p>
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const error = ref<Error>()
const data = ref<typ[]>()

interface typ {
  id: number
  title: string
  body: string
}

fetch<typ>("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(jsonData => {
      data.value = jsonData
    })
    .catch(e => error.value = e)
</script>

<style lang="scss" scoped>

</style>