<template>
    <div class="rounded-md bg-green-600 px-3 py-1 my-1 h-auto" v-for="item in items" :key="item.id">
      <div class="flex flex-wrap">
        <div class="text-sm font-medium text-white">{{ item.id }}</div>
        <a class="flex-auto font-sans font-bold text-black">{{ item.title }}</a>
        <div class="w-full font-sans text-white mt-2">{{ item.body }}</div>
      </div>
    </div>
</template>
<script>
export default {
  name: "Stories",
  props: {
    items: Array,
  },
}
</script>