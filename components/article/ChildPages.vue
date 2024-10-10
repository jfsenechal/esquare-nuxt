<script setup>
defineProps({
  childPages: {
    type: Object,
    default: []
  }
})
</script>
<template>
  <section class="container mx-auto ">
    <ul class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <li v-for="childPage in childPages" :key="childPage.id">
        <div class="prose xl:prose-xl flex flex-col p-3 md:p-6">
          <NuxtLink :to="childPage.link"
                    class="block mt-2 text-xl font-semibold font-roboto text-esquare-black transition-colors duration-300 transform hover:text-esquare-green-dark hover:underline"
                    tabindex="0" role="link">
            {{ childPage.name }}
          </NuxtLink>
        </div>
      </li>
    </ul>
  </section>
</template>