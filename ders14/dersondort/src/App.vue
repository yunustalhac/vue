<template>
  <div>
    <input style="background:#ccc;" type="text" v-model="fallow">
    <my-button @click="clickFunction">

      <template #new>
        {{ fallow }}
      </template>

    </my-button>
  </div>
</template>

<script setup lang="ts">
import myButton from "./components/page.vue"
import {ref} from "vue";

const clickFunction = () => {
  alert("bismillah")
}

const fallow = ref("burada slot içinde dinamik bir biçimde yazı yazabiliyorsunuz")

</script>

<style lang="scss" scoped>

</style>