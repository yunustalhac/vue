<template>
  <div>
    <div>
      <h3>userName:{{ user.name }}</h3>
      <h3>userId:{{ user.id }}</h3>
      <button class="border border-black" @click="dnm">tıkla ve konsola bak</button>
    </div>

    <ul>
      <li class="ml-10 mt-2 font-bold" v-for="user in todos">{{ user.id }}. {{ user.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">

import {onMounted, reactive} from "vue";
import axios from "axios";


function dnm(e: Event) {
  console.log(e)
}

interface user {
  id: number
  title: string
}

const todos = reactive<user[]>([])


onMounted(() => {
  // fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((r)=>r.json())
  //     .then(todoData=>{
  //           todos.push(...todoData)
  //     })

  // axios.get<user>("https://jsonplaceholder.typicode.com/todos")
  //     .then((response: axios<user>) => {
  //       const User: user = response.data;
  //       todos.push(...response.data)
  //     })
})


interface name {
  name: string
  id: number
}

const user = reactive<name>({
  id: 1,
  name: "yunus"
})

</script>

<style lang="scss" scoped>

</style>