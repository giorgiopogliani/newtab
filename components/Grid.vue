<script lang="tsx" setup>
import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";
import { useStorage } from "@vueuse/core";

let grid: GridStack = null;
let items = useStorage<any>("layout", () => []);

onMounted(() => {
  grid = GridStack.init({
    float: true,
    cellHeight: "50px",
    minRow: 1,
  });

  grid.on("change", onChange);
});

function onChange(event, changeItems) {
  items.value = grid.getGridItems().map((el) => {
    console.log(el);
    return { 
      id: el.getAttribute("gs-id"),
      x: el.getAttribute("gs-x"),
      y: el.getAttribute("gs-y"),
      w: el.getAttribute("gs-w"),
      h: el.getAttribute("gs-h"),
    };
  });
}
</script>

<template>
  <div class="grid-stack">
    <slot />
  </div>
</template>
