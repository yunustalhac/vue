<template>
  <div>
    <router-link to="/">anasayfa</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/login">login</router-link>
    <router-view/>

    <div v-if="authStore.isAuth&&currentUser">
      welcome: <strong>{{ currentUser.displayName }}</strong>
    <button @click="handleLogout()">logout</button>
    </div>

  </div>
</template>

<script setup lang="ts">


import {onMounted, ref} from "vue";
import {useAuthStore} from "@/store/authStore";

const currentUser = ref()
const authStore = useAuthStore()
const handleLogout = async () => {
  await authStore.logout()
  location.href = "/login "
}
onMounted(async () => {
  currentUser.value = await authStore.user
})
</script>

<style scoped>

</style>