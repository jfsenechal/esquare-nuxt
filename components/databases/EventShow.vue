<script setup lang="ts">
const {page} = defineProps({
  page: {
    type: Object,
    required: true
  }
})
const properties = computed(() => page.properties)
const tags = computed(() => properties.value['Organisateur']['multi_select'] ?? [])
const images = computed(() => properties.value['ImageCouvertureCarre']?.files ?? [])
const salle = computed(() => properties.value['Salles'])
const inscription = computed(() => properties.value['Lien inscription'])
const dates = computed(() => {
  const dateObject = properties.value['Date']['date']
  const startDate = new Date(dateObject.start)
  let endDate = null
  if (dateObject.end) {
    endDate = new Date(dateObject.end)
  }
  return eventDate(startDate, endDate, true)
})
</script>
<template>
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
        <div>
          <div class="border-b border-gray-200 pb-10">
            <h2 class="font-medium text-gray-500">Quand ?</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {{ dates }}
            </p>
          </div>

          <dl class="mt-10 space-y-10">
            <dt class="text-sm font-medium text-gray-900">Salle</dt>
            <dd class="mt-3 text-sm text-gray-500">{{ salle }}</dd>
          </dl>
          <dl class="mt-10 space-y-10">
            <dt class="text-sm font-medium text-gray-900">Inscription</dt>
            <dd class="mt-3 text-sm text-gray-500">
              <NuxtLink :to="inscription.url" target="_blank">Je m'inscris</NuxtLink>
            </dd>
          </dl>

          <dl class="mt-10 space-y-10">
            <dt class="text-sm font-medium text-gray-900">Organisateur(s)</dt>
            <div v-for="tag in tags" :key="tag.name">
              <dd class="mt-3 text-sm text-gray-500">{{ tag.name }}</dd>
            </div>
          </dl>
        </div>
        <div v-if="images.length > 0">
          <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
            <img :src="images[0].file.url" alt="affiche" class="h-full w-full object-cover object-center"/>
          </div>
          <div class="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8" v-if="images.length > 1">
            <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100" v-for="(image,index) in images"
                 :key="index">
              <img :src="image.file.url" alt="img" class="h-full w-full object-cover object-center"/>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>