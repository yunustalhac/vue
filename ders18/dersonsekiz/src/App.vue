<template>
  <div>

    <h1>{{ stor.getCount() }}</h1>

    <ul>
      <li v-for="i in stor.items">{{ i }}</li>
    </ul>

    <input @keydown.enter="stor.addItem(stor.modal)" v-model="stor.modal" type="text">
    <button @click="stor.addItem(stor.modal)">ekle</button>

  </div>
</template>

<script setup>
import {storShop} from "@/assets/shopingCard.js";
import {ref} from "vue";


const stor = storShop()
</script>

<style lang="scss" scoped>

</style>