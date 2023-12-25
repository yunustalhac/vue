<template>
  <div>
    <ul>
      <li v-for="(meyve,i) in array" :key="meyve">{{ i + 1 }} => {{ meyve }}</li>
      <li v-for="(value,key) in object" :key="value">
        <span style="color: red" v-if="value===16">{{ value }}</span>
        <span v-else>{{ value }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from "vue";

const array = ["elma", "armut", "kiraz", "erik"]
const object = ref({
  name: "yunus",
  age: 16,

})
</script>

<style lang="scss" scoped>

</style>