<script lang="ts" setup>
import { ref, onMounted } from "vue";

const message = ref("Hello World!");
</script>

<template>
  <div class="">
    <slot></slot>
  </div>
</template>