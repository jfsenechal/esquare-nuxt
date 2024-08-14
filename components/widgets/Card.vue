<script setup>
//https://uicolors.app/create?s=03
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <NuxtLink :to="`article-${item.tag}-0dcf77ca3c1349b08d19afc5092129f3`" class="group">
    <div
        class="card-shadow rounded-2xl p-0 bg-cover bg-center h-96 relative overflow-hidden transition duration-300 ease-out will-change-transform group-hover:scale-110"
        :style="`background-image: url('${item.image}');`">
      <div class="absolute inset-0" style="background-image: linear-gradient(transparent 0%, rgb(131, 81, 16) 100%);">
        <div class="h-full flex">
          <div class="leading-none p-6 rounded-2xl mt-auto mb-2 text-3xl font-semibold drop-shadow-sm tracking-tight"
               style="color: rgb(254, 253, 232);"> {{ item.name }}<br>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 mb-3 text-saffron-950 group-hover:text-esquare-green-dark"> {{ item.excerpt }}</div>
  </NuxtLink>
</template>