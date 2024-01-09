bismillah
<template>
  <form @submit.prevent="handleLogin">
    <div class="flex justify-center items-center flex-col">

      <div class="flex flex-col">
        <label for="name">userName</label>
        <input required id="name" class="border-2 border-black rounded" type="text" v-model="loginForm.userName">
      </div>

      <div class="flex flex-col">
        <label for="password">password</label>
        <input required id="password" class="border-2 border-black rounded" type="password" v-model="loginForm.password">
      </div>

      <button class="border-2 border-black p-1 rounded mt-2">login</button>

    </div>

  </form>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {useAuthStore} from "../store/authStore";

const authStore = useAuthStore()

const loginForm = reactive({
  userName: "",
  password: "",
})

const handleLogin = async () => {
  const isAuth = await authStore.login(loginForm.userName, loginForm.password)

  if (isAuth) {
    location.href = "/home"
  } else {
    alert("user not found")
  }
}


</script>

<style lang="scss" scoped>

</style>