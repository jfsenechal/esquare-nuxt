<script setup lang="ts">
//https://play.tailwindcss.com/0MGqLZKhTK
const tagSelected = ref('Tout')
const news = ref([])
const {
  status,
  data,
  error
} = databaseActivitiesComposeGet()
watch(tagSelected, (newTag) => {
  if (newTag === 'Tout') {
    news.value = data.value.pages
  } else if (newTag) {
    const t = []
    data.value.pages.forEach((page) => {
      page['properties']['Organisateur']['multi_select'].forEach((property) => {
        if (property['name'] === newTag) {
          t.push(page)
        }
      })
    })
    news.value = t
  }
})
onMounted(() => {
  news.value = data.value?.pages ?? []
})
</script>
<template>
  <section class="">
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <div v-else>
      <div class="flex flex-col items-center">
        <HomepageTags :data v-model:tag-selected="tagSelected"/>
      </div>
      <div class="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
        <WidgetsCard v-for="page in news" :key="page.id" :page/>
      </div>
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