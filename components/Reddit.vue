<script lang="ts" setup>
const { data, status } = await useAsyncData(async () => {
  return await $fetch("https://www.reddit.com/r/php/new.json")
});
</script>

<template>
  <div>
    <div v-if="status != 'pending'">
      <div v-for="item in data.data.children?.splice(0, 4)">
        {{ item.data.title }}
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>