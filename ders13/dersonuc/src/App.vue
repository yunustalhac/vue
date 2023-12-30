<template>
  <div>
    {{ width }}
    {{ breakPoints }}

    <p>small</p>
    <div class="box1" v-if="breakPoints.sm"></div>
    <p>medium</p>
    <div class="box2" v-if="breakPoints.md"></div>
    <p>large</p>
    <div class="box3" v-if="breakPoints.lg"></div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";

const width = ref(window.innerWidth);

const breakPoints = reactive({
  sm: false,
  md: false,
  lg: false
});

const updateBreakpoints = (currentWindowWidth) => {
  breakPoints.sm = currentWindowWidth <= 800;
  breakPoints.md = currentWindowWidth > 800 && currentWindowWidth < 1200;
  breakPoints.lg = currentWindowWidth > 1200;
};

// Initial setup
updateBreakpoints(width.value);

watch(width, (currentWindowWidth) => {
  updateBreakpoints(currentWindowWidth);
});

window.addEventListener("resize", function () {
  const currentWindowWidth = window.innerWidth;
  width.value = currentWindowWidth;
});
</script>

<style>
.box1 {
  background: red;
  height: 100px;
  width: 100px;
}

.box2 {
  background: green;
  height: 100px;
  width: 100px;
}

.box3 {
  background: blue;
  height: 100px;
  width: 100px;
}
</style>
