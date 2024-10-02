<script setup lang="tsx">
import Counter from "~/components/Counter.vue";
import Reddit from "~/components/Reddit.vue";
import Search from "~/components/Search.vue";
import { useStorage } from "@vueuse/core";

const items = useStorage<any>("layout", () => []);

const widgets = computed(() => {
  return [
    { id: 1, x: 0, y: 0, h: 2.5, w: 2, c: Search },
    { id: 2, x: 0, y: 0, h: 3, w: 3, c: Counter },
    { id: 3, x: 0, y: 0, h: 3, w: 3, c: Counter },
    { id: 4, x: 5, y: 0, h: 3, w: 3, c: Reddit },
  ].map((widget) => {
    const item = items.value.find((el) => el.id == widget.id) ?? {};
    return { ...widget, ...item };
  });
});
</script>

<template>
  <div class="p-2">
    <Grid>
      <Cell v-for="(item, index) in widgets" :key="index" :item="item">
        <component :is="item.c" v-bind="item" />
      </Cell>
    </Grid>
  </div>
</template>
