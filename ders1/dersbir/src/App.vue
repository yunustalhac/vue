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

import {onMounted, reactive, ref} from "vue";
import axios from "axios";

interface User {
  id: number;
  title: string;
}

const todos = reactive<User[]>([]);


onMounted(() => {
  console.log('onMounted');

  axios.get<User[]>("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        todos.push(...response.data)
      });
});

interface Name {
  name: string;
  id: number;
}

const user = ref<Name>({
  id: 1,
  name: "yunus"
});

function dnm(e: Event) {
  console.log(e);
}

</script>


<style lang="scss" scoped>

</style>