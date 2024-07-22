<script setup>
import {IconClipboard} from "@tabler/icons-vue";

const propos = defineProps({
  daySelected: {
    type: String,
    required: false,
    default: null,
  },
  dataByRoom: {
    type: Array,
    required: true,
    default: []
  }
})

const isDaySelected = computed(() => {
  console.log(propos.daySelected)
  if (propos.daySelected !== null) {
    return true
  }
  return false
})

const dayInFrench = computed(() => {
  return getDayInFrench(propos.daySelected)
})
</script>
<template>
  <section class="mt-12 md:mt-0 pl-5 prose md:prose-xl">
    <span class="text-esquare-brown" v-if="!isDaySelected">
      Veuillez sélectionner une date pour afficher les réservations
    </span>
    <div class="flex flex-col items-start" v-else>
      <h3 class="tex font-semibold  text-esquare-brown">
        Réservation(s) pour le {{ dayInFrench }}
      </h3>
      <ol class="mt-4 space-y-1 text-gray-500" v-if="dataByRoom.length > 0">
        <li v-for="item in dataByRoom" :key="item.id"
            class="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100">
          <IconClipboard
              alt="" class="h-10 w-10 flex-none rounded-full text-esquare-brown"/>
          <div class="flex-auto">
            <span class="text-gray-900">Réservé</span>
            <span class="mt-0.5">
              de
              <time datetime="2022-01-21T13:00">{{ item.dayStartHours }}</time>
              - à
              <time datetime="2022-01-21T14:30">{{ item.dayEndHours }}</time>
            </span>
          </div>
        </li>
      </ol>
      <span class="font-semibold" v-else>
        Aucune réservation
      </span>
    </div>
  </section>
</template>