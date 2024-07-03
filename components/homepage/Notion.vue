<script setup lang="ts">
const state = reactive({
  images: [],
});
const res = await fetch("http://localhost:3000/api/gallery");

res.json().then((images) => {
  console.log(images);
  state.images = images;
});
</script>
<template>
  <section>
    <hr class="border-2 border-amber-600 w-full m-4">
    <ul>
      <li v-for="(items,index) in state.images" :key="index" class="border border-gray-300 m-2">
        <h5 v-for="(item,key) in items.Name.title" class="m-1">
          <span :style="`color:${item.annotations.color}`">{{ item.text.content }}</span>
        </h5>
        <div v-for="(item,key) in items.Tags.multi_select" class="m-1">
          <span :style="`color:${item.color}`">{{ item.name }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>