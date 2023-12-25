<template>
  <div>
    <input type="text" v-model="name">
    <pre>{{ name }}</pre>


    <label for="">
      1nolu
      <input name="check" type="radio" v-model="check" value="1nolu seçili">
    </label>

    <label for="">
      2nolu
      <input name="check" type="radio" v-model="check" value="2nolu seçili">
    </label>
    <h1>{{ check }}</h1>


    <select v-model="il">
      <option value="11">bilecik</option>
      <option value="32">ısparta</option>
      <option value="03">afyon</option>
    </select>
    <h1>{{il}}</h1>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";

const name = ref()
const check = ref("1nolu seçili")
const il = ref(11)

</script>

<style lang="scss" scoped>

</style>