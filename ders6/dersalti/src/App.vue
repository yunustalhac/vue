<template>
  <div>
    <h3>options api ile yapılmış sayı arttırma işlemi</h3>
    <button @click="this.count++">artır</button>
    <h1>{{ this.count }}</h1>
    <button @click="this.count--">azalt</button>

    <h3>aynı işlemi composition api ile yaptım</h3>
    <button @click="countt++">artır</button>
    <h1>{{ countt }}</h1>
    <button @click="countt--">azalt</button>
  </div>
</template>

<script setup>

import {ref} from "vue";

const countt = ref(0)
</script>


<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>