<template>
  <div style="font-size: 24px;margin:5%">
    <nav>
      <router-link style="margin-right: 10px;" to="/home">home</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/login">login için</router-link>
    </nav>

    <div v-if="isAuth&&currentUser">
      welcome: <strong>{{ currentUser.displayName }}</strong>
      <button @click="handleLogout()">logout</button>
    </div>
    <router-view/>
  </div>
</template>

<script setup lang="ts">


import {onMounted, ref} from "vue";
import {useAuthStore} from "@/store/authStore";

const currentUser = ref()
const authStore = useAuthStore()
const isAuth = ref()

onMounted(async () => {
  currentUser.value = await authStore.user
  isAuth.value = await authStore.isAuth
})

const handleLogout = async () => {
  await authStore.logout()
  location.href = "/login "
}
</script>

<style scoped>

</style>