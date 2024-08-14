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
    <WidgetsTitle>Actualités</WidgetsTitle>
    <div class=" flex flex-col items-center">
      <HomepageTags v-model:tag-selected="tagSelected"/>
    </div>
    <div class="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
      <WidgetsCard v-for="item in newsRef" :key="item.id" :item/>
    </div>
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