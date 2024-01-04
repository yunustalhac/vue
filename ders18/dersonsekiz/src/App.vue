<template>
  <div>

    <h1>{{ store.getCount() }}</h1>

    <ul>
      <li v-for="i in store.items">{{ i }}</li>
    </ul>

    <input @keydown.enter="store.addItem(store.modal)" v-model="store.modal" type="text">
    <button @click="store.addItem(store.modal)">ekle</button>

  </div>
</template>

<script setup>
import {storeShop} from "./store/shopingCard.js";


const store = storeShop()
</script>

<style lang="scss" scoped>

</style>