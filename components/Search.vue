<script lang="ts" setup>
import { ref } from "vue";
import { Input } from "./ui/input";
const message = ref("Hello World!");

const open = (url: string, target: string) => window.open(url, target);
</script>

<template>
  <form @submit.prevent="() => open(`https://google.com/search?q=${message}`, '_blank')">
    <Input v-model="message" autofocus />
  </form>
</template>
