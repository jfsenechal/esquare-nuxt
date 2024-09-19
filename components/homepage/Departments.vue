<script setup>
const config = useRuntimeConfig()
const {
  pending,
  data,
  error
} = pageComposeGet(config.public.NOTION_SERVICES_ID)
/*const {
  pending,
  data,
  error
} = spacesGet()*/
const items = ref([])
onMounted(() => {
})
</script>
<template>
  <section class="container mx-auto ">
    <WidgetsTitle>Nos services</WidgetsTitle>
    <ul class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <li v-for="space in data.childPages"
          :key="space.id"
          class="flex flex-col items-center group group-hover:text-esquare-green-dark text-center scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition duration-700">
        <NuxtLink :to="space.link"
                  class="text-7xl sm:text-8xl group-hover:text-esquare-green-dark"
                  :class="space.color ?? ''">
          {{ space.emoji?? '' }}
          <img :src="space.image" class="w-24 h-24" v-if="space.image" alt="icon"/>
        </NuxtLink>
        <div class="prose xl:prose-xl flex flex-col p-3 md:p-6">
          <NuxtLink :to="space.link"
                    class="block mt-2 text-xl font-semibold font-roboto text-esquare-black transition-colors duration-300 transform hover:text-esquare-green-dark hover:underline"
                    tabindex="0" role="link">
            {{ space.name }}
          </NuxtLink>
          <p class="hidden md:block mt-2 text-base text-gray-600 dark:text-gray-400 self-start">
            <BlockRichText :texts="space.texts"/>
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>
<style>
/* tip if 5 elements  */

grid:nth-last-child(5) {
  /* col-span */
}
</style>