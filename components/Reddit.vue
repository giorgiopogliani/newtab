<script lang="ts" setup>
const { data, status } = await useAsyncData(async () => {
  return await $fetch("https://www.reddit.com/r/php/new.json")
});
</script>

<template>
  <div>
    <h2>/r/php</h2>
    <div v-if="status != 'pending'">
      <div v-for="item in data.data.children?.splice(0, 10)" class="text-sm py-1">
        <a target="_blank" class="underline" :href="item.data.url">{{ item.data.title }}</a>
        <p v-html="item.data.selftext" class="line-clamp-2"></p>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>