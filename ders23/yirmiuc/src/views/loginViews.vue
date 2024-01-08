<template>
  <div>
    <h1>login</h1>

    <form @submit.prevent="handleLogin">
      <p>
        userName <input type="text" required v-model="loginForm.userName">
      </p>

      <p>
        password <input type="text" required v-model="loginForm.password">
      </p>

      <button>login</button>
    </form>
  </div>

  <p>kullanıcı adı:<b>deneme@mail.com</b></p>
  <p>şifre:<b>123</b></p>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {useAuthStore} from "@/store/authStore";

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

<style scoped>

</style>