<script setup>
const props = defineProps({
  room: {
    type: Object,
    required: true,
  }
})
const slugify = computed(() => {
  return props.room.Nom.title[0].text.content.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
})
</script>
<template>
  <div
      class="flex flex-col md:flex-row items-center md:even:flex-row-reverse mb-2 even:translate-x-1/3 -translate-x-1/3 intersect:translate-x-0 transition ease-out duration-500">
    <img
        class="w-[18rem] md:w-[50rem] mb-2 md:mb-0"
        :src="room.Image.files[0].name" alt="room"/>
    <div class="flex flex-col items-center prose lg:prose-xl ml-4 ">
      <h3 class="text-2xl text-esquare-yellow font-semibold ">
        {{ room.Nom.title[0].text.content }}
      </h3>
      <span class="text-esquare-grey-dark text-left trail">{{ room.Description.rich_text[0].text.content }}</span>
      <RoomFeatures :room :key="room.GrrId.number"/>
      <NuxtLink :to="`salles-a-louer/reserver-${slugify}-${room.GrrId.number}`"
                :key="room.GrrId.number"
                class="animate-up text-esquare-black flex flex-row  justify-center items-center h-16 w-80 border-8 border-t-esquare-blue border-r-esquare-yellow border-b-esquare-blue border-l-esquare-yellow">
        Réservation et tarifs
      </NuxtLink>
    </div>
  </div>
</template>