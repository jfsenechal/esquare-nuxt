<script setup lang="ts">
//https://play.tailwindcss.com/0MGqLZKhTK
import {news} from "~/composables/menuItemsGet";

const tagSelected = ref('Tout')
const newsRef = ref(news)

watch(tagSelected, (newTag) => {
  if (newTag) {
    newsRef.value = news.filter((item) => item.tag === tagSelected.value)
  }
  if (newTag === 'Tout') {
    newsRef.value = news
  }
})
</script>
<template>
  <section class="container mx-auto">
    <h2 class="text-4xl text-esquare-yellow font-semibold my-2 px-2 uppercase">Actualités</h2>
    <div class=" flex flex-col items-center">
      <HomepageTags v-model:tag-selected="tagSelected"/>
    </div>
    <Transition name="slide-fade" appear mode="out-in">
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 p-8" :key="tagSelected">
        <NuxtLink :to="item.link" v-for="item in newsRef" :key="item.id"
                  class="group relative mx-auto block w-full max-w-sm overflow-hidden rounded-lg ring-8 ring-white/50 transition duration-150 ease-out active:scale-105 active:opacity-75 md:max-w-full">
          <div class="rounded-lg">
            <div
                class="aspect-h-3 aspect-w-4 transition duration-300 ease-out will-change-transform group-hover:scale-110">
              <img :src="item.image" alt="" class="w-full h-48 object-cover rounded-t-lg"/>
            </div>
            <div
                class="absolute inset-0 flex flex-col justify-center gap-1.5 bg-zinc-800/60 bg-am2ber-700/75 p-4 text-center text-white opacity-0 duration-150 ease-out group-hover:opacity-100 md:p-8">
              {{ item.excerpt }}
            </div>
            <div class="p-6">
              <h2 class="font-bold text-2xl;">{{ item.name }}</h2>
              <p class="mt-4 mb-3">
                {{ item.excerpt }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </Transition>
  </section>
</template>
<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>