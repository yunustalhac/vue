<!-- App.vue -->
<template>
  <div>
    <button @click="componentName('IconCommunity')">Community</button>
    <button @click="componentName('IconDocumentation')">Documentation</button>
    <button @click="componentName('IconEcosystem')">Ecosystem</button>
  </div>

  <h1>bismillah</h1>
  <component :is="compName"/>
  <div>

  </div>
</template>

<script setup lang="ts">
import {defineAsyncComponent, ref} from "vue";


const compName = ref()
const componentName = (name: string) => {
  compName.value = defineAsyncComponent(() => import(`./components/icon/${name}.vue`))
}

</script>

<style scoped>

</style>


<!-- App.vue -->
<!--<template>-->
<!--  <div>-->
<!--    <button @click="setComponentName('IconCommunity')">Community</button>-->
<!--    <button @click="setComponentName('IconDocumentation')">Documentation</button>-->
<!--    <button @click="setComponentName('IconEcosystem')">Ecosystem</button>-->
<!--  </div>-->

<!--  <h1>bismillah</h1>-->
<!--  <div>-->
<!--    <p>Current Component: {{ componentName }}</p>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import { ref } from "vue";-->

<!--const componentName = ref("");-->

<!--const setComponentName = (name: string) => {-->
<!--  componentName.value = name;-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--/* Your styles here */-->
<!--</style>-->

