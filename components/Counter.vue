<script lang="ts" setup>
import { ref } from "vue";
import Button from "@/components/ui/button/Button.vue";

const count = ref(0);

function increment() {
  count.value++;
}
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <Button variant="secondary" @click="increment">Increment</Button>
  </div>
</template>
