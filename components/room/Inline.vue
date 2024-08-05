<script setup>
const props = defineProps({
  room: {
    type: Object,
    required: true,
  }
})
const slugifyString = computed(() => {
  return slugify(props.room.Nom.title[0].text.content.toString().toLowerCase())
})
const roomName = computed(() => {
  return props.room.Nom.title[0].text.content
})
const roomDescription = computed(() => {
  return props.room.Description.rich_text[0].text.content
})
const image = computed(() => {
  return props.room.Image.files[0].name
})
</script>
<template>
  <div
      class="flex flex-col sm:flex-row items-center sm:even:flex-row-reverse mb-2 even:translate-x-1/3 -translate-x-1/3 intersect:translate-x-0 transition ease-out duration-500">
    <img
        class="w-full md:w-1/2 mb-2 sm:mb-0"
        :src="image" alt="room"/>
    <div class="flex flex-col items-center">
      <h3 class="text-2xl text-esquare-yellow font-semibold">
        {{ roomName }}
      </h3>
      <span class="text-esquare-grey-dark sm:pl-3 text-left prose lg:prose-xl ">
        {{ roomDescription }}
      </span>
      <RoomFeatures :room :key="room.GrrId.number"/>
      <NuxtLink :to="`salles-a-louer/reserver-${slugifyString}-${room.GrrId.number}`"
                :key="room.GrrId.number"
                class="animate-up text-esquare-black flex flex-row  justify-center items-center h-16 w-80 border-8 border-t-esquare-blue border-r-esquare-yellow border-b-esquare-blue border-l-esquare-yellow">
        Réservation et tarifs
      </NuxtLink>
    </div>
  </div>
</template>