<template>
  <div>
    <h1>bu bir axios uygulamasıdır</h1>

<pre>
  {{adata}}
</pre>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";

const adata = ref()

onMounted(()=>{
  axios.interceptors.request.use((config)=>{
    console.log(config)

    return config
  })

  axios.interceptors.response.use((response)=>{
    console.log(response)

    return response
  })

  axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        adata.value=response.data
      })
})

</script>

<style lang="scss" scoped>

</style> 