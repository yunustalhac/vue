<!-- componentLoader.vue -->
<template>
  <component :is="loadedComponent"/>
</template>

<script setup lang="ts">
import {defineAsyncComponent, ref, watch} from "vue";

const props = defineProps<{
  componentName: String;
}>();

const loadedComponent = ref();

watch(
    () => props.componentName,
    (value) => {
      loadedComponent.value = defineAsyncComponent(() => import(`@/components/icon/${value}.vue`));
    }
);

</script>

<style scoped>

</style>
