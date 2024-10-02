<script lang="ts" setup>
defineProps<{
  item: {
    id: string;
    x: number;
    y: number;
    h: number;
    w: number;
  };
}>();
</script>

<template>
  <div
    class="grid-stack-item"
    :gs-x="item.x"
    :gs-y="item.y"
    :gs-w="item.w"
    :gs-h="item.h"
    :gs-id="item.id"
    :id="item.id"
    :key="item.id"
  >
    <div class="grid-stack-item-content">
      <slot />
    </div>
  </div>
</template>
