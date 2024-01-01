<template>
  <div>
    <button @click="$emit('clickFunction')">tıklayınız</button>
    <br>
    <br>
    <br>
    <slot name="new">
      bu slot un default değeri
    </slot>
  </div>
</template>

<script setup>
          const prop=defineProps({
            color:{}
          })
</script>

<style scoped>

</style>