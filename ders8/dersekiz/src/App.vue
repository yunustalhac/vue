<template>
  <div>
    <button @click="count++">{{ count }}</button>
    <p>{{ log }}</p>

    <p>İlk Sayı: {{ number1 }}</p>
    <p>İkinci Sayı: {{ number2 }}</p>
    <p>Toplam: {{ sum }}</p>
  </div>
</template>

<script setup>
import {computed, ref, watch} from "vue";

const log = ref()
const count = ref(0)

const number1 = ref(5);
const number2 = ref(3);

const sum = computed(() => {
  return number1.value + number2.value
})

watch(count, (newValue, oldValue) => {
  log.value = `oldvalue=>${oldValue} - newValue=>${newValue}`
})
</script>

<style lang="scss" scoped>

</style>a