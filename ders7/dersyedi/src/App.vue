<template>
  <div>
    <h1 v-html="vhtml"></h1>
    <a :href="vbind">bu bir v-bind işlemidir</a>
    <button @click="bool=!bool">bu bir boolean örneği</button>
    <p>{{ bool }}</p>
    <h3 @click="vif=!vif" v-if="vif">vif ise bu (tıkla)</h3>
    <h3 @click="vif=!vif" v-else>velse ise bu (tekrar tıkla)</h3>

    <ul>
      <li v-for="item in items">{{item}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const vbind = "https://www.youtube.com/watch?v=dS4ElrV2Li4&list=PLf-6qk7szL-J4a7xaGf2TbW0p_cGbeMe7&index=7"
const vhtml = '<h1>bu bir v-html</h1>'
const bool = ref(true)
const vif = ref(true)
const items = ref(["yunus","talha ","çoban",])

</script>


<style>
*{
  user-select: none;
}
</style>