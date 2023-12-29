<template>
  <div>
    <button @click="count++">artır</button>
    <h1>{{ count }}</h1>

    <input type="text" ref="refer">

    <h1 :class="{baslik :isred}">bismillah</h1>
    <button @click="isred=!isred">değiştir</button>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const count = ref(0)
const refer = ref()
const isred = ref(false)

onMounted(() => {
  alert("bu bir life cycle örneğidir")
  console.log(refer.value)

})

</script>

<style>
.baslik {
  color: red;
}
</style> 