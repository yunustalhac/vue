<template>
  <div>

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
    location.href = "/"
  } else {
    alert("user not found")
  }
}
</script>

<style scoped>

</style>