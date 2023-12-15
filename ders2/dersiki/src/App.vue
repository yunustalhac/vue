<template>
  <div>
    {{ yazi }}
  </div>

  <div>
    <p>{{ user.firstName }}</p>
    <p>{{ user.lastName }}</p>
    <p>{{ user.surname }}</p>
  </div>
</template>

<script setup lang="ts">

import {reactive, ref} from "vue";

const sayiref = ref(5)

const yazi = ("Referansın değeri:" + sayiref.value)

const user = reactive({
  firstName: "yunus",
  lastName: "talha",
  surname: "çoban",

})

</script>

<style >

*{
  margin-top: 20px;
}

</style>