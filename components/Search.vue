<script lang="ts" setup>
import { ref } from "vue";
import { Input } from "./ui/input";
const message = ref("Hello World!");

const open = (url: string, target: string) => window.open(url, target);
</script>

<template>
  <div class="flex items-center justify-center w-full h-full">
    <form @submit.prevent="() => open(`https://google.com/search?q=${message}`, '_blank')" class="w-full">
      <Input v-model="message" autofocus class="w-full"/>
    </form>
  </div>
</template>
