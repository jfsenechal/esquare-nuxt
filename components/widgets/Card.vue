<script setup>
//https://uicolors.app/create?s=03
const {page} = defineProps({
  page: {
    type: Object,
    required: true
  }
})
const texts = computed(() => page['properties']['Nom']['title'])
const descriptions = computed(() => page['properties']['Nom']['title'])
const image = '/images/news/book.jpg'
</script>
<template>
  <NuxtLink to="/" class="group">
    <div
        class="card-shadow rounded-2xl p-0 bg-cover bg-center h-96 relative overflow-hidden transition duration-300 ease-out will-change-transform group-hover:scale-110"
        :style="`background-image: url('${image}');`">
      <div class="absolute inset-0" style="background-image: linear-gradient(transparent 0%, rgb(131, 81, 16) 100%);">
        <div class="h-full flex">
          <div class="leading-none p-6 rounded-2xl mt-auto mb-2 text-3xl font-semibold drop-shadow-sm tracking-tight"
               style="color: rgb(254, 253, 232);">
            <BlockRichText :texts="texts"/>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="mt-4 mb-3 text-saffron-950 group-hover:text-esquare-green-dark">
      <BlockRichText :texts="descriptions"/>
    </div> -->
  </NuxtLink>
</template>