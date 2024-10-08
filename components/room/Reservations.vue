<script setup>
import {IconClipboard} from "@tabler/icons-vue";

const openBook = ref(false)
const props = defineProps({
  daysSelected: {
    type: Array,
    required: false,
    default: [],
  },
  dataGrr: {
    type: Array,
    required: false,
    default: [],
  }
})
const isDaysSelected = computed(() => {
  return props.daysSelected.length > 0;
})

function dataByDay(day) {
  return props.dataGrr.filter((item) => {
    return day === item.dayStart
  })
}
</script>
<template>
  <section class="mt-12 mb-12 md:mb-0 md:mt-0 md:pl-5">
    <span class="text-esquare-blue prose md:prose-xl">
      Sélectionner vos dates pour vérifier les disponibilités et réserver
    </span>
    <div v-if="daysSelected.length > 0">
      <ul class="flex flex-row gap-2 items-center">
        <li class="flex items-center p-3 rounded-md shadow-sm h-12 bg-esquare-green-light text-white" v-for="day in daysSelected" :key="day">{{ getDayInFrenchWithoutYear(day) }}</li>
      </ul>
      <div class="flex flex-col items-start prose lg:prose-xl">
        <div v-for="day in daysSelected" :key="day">
          <ol class="mt-4 space-y-1 text-gray-500">
            <li v-for="item in dataByDay(day)" :key="item.id"
                class="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100">
              <IconClipboard
                  alt="" class="h-10 w-10 flex-none rounded-full text-esquare-brown"/>
              <div class="flex-auto">
                <span class="text-red-400">&lt;!&gt;Réservé le {{ getDayInFrenchWithoutYear(day) }}</span>
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
          <span class="relative z-0 text-black group-hover:text-white transition ease-in-out duration-500">
            Je souhaite réserver
          </span>
        </button>
      </div>
    </div>
    <RoomToBook :open-book/>
  </section>
</template>