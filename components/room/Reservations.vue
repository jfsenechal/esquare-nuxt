<script setup>
import {IconClipboard} from "@tabler/icons-vue";

const openBook = ref(false)
const propos = defineProps({
  daysSelected: {
    type: Array,
    required: false,
    default: [],
  },
  dataGrr: {
    type: Array,
    required: true,
    default: []
  }
})
const isDaysSelected = computed(() => {
  return propos.daysSelected.length > 0;
})

function dataByDay(day) {
  return propos.dataGrr.filter((item) => {
    return day === item.dayStart
  })
}
</script>
<template>
  <section class="mt-12 mb-12 md:mb-0 md:mt-0 md:pl-5 prose md:prose-xl">
    <span class="text-esquare-brown" v-if="!isDaysSelected">
      Sélectionner une date pour réserver et afficher les réservations déjà prises
    </span>
    <div class="flex flex-col items-start" v-else>
      <div v-for="day in daysSelected" :key="day">
        <span class="text-esquare-brown font-semibold">Réservation(s) pour le {{ getDayInFrench(day) }}</span>
        <p class="font-semibold" v-if="dataByDay(day).length === 0">Aucune réservation</p>
        <ol class="mt-4 space-y-1 text-gray-500" v-else>
          <li v-for="item in dataByDay(day)" :key="item.id"
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
      </div>
      <button
          type="button"
          @click="openBook=true"
          class="group [transform:translateZ(0)] px-6 py-3 rounded-lg bg-esquare-grey-lighter overflow-hidden relative before:absolute before:bg-esquare-yellow before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500">
        <span class="relative z-0 text-black group-hover:text-white transition ease-in-out duration-500">Je souhaite réserver</span>
      </button>
    </div>
    <RoomToBook :open-book/>
  </section>
</template>