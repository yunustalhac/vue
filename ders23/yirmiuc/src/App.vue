<template>
  <div>
    <main-layout/>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref, watch} from "vue";
import mainLayout from "@/layouts/mainLayout.vue";
import loginLayout from "@/layouts/loginLayout.vue";

const route = useRoute()
const layout = ref()

watch(
    () => route.meta.layout, (value) => {
      if (value == "mainLayout") {
        layout.value = mainLayout
      }                          else{
        layout.value=loginLayout
      }
    }
)

</script>

<style scoped>

</style> 