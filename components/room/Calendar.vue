<script setup>
//https://lexingtonthemes.com/tutorials/how-to-create-a-calendar-layout-with-tailwind-css/
const props = defineProps({
  roomId: {
    type: Number,
    required: true,
    default: 0,
  }
})
const today = getToday()
const daysSelected = ref([])
const yearSelected = ref(Number(formatDate(today, 'yyyy')))
const monthSelected = ref(Number(formatDate(today, 'MM')))
const days = ref(getFullWeeksIncludingOverflow(yearSelected.value, monthSelected.value))
const {
  pendingGrr,
  dataGrr,
  errorGrr
} = entriesGet(props.roomId)

watch(monthSelected, (newX) => {
  days.value = getFullWeeksIncludingOverflow(yearSelected.value, newX)
})

function getDataByDay(day) {
  if (dataGrr.value && typeof dataGrr.value === 'object') {
    return dataGrr.value.filter((item) => {
      return day === item.dayStart
    })
  }
}
</script>
<template>
  <div class="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
    <div class="md:pr-14">
      <div class="flex items-center">
        <h3 class="flex-auto text-2xl font-semibold capitalize">
          {{ getMonthNameInFrench(monthSelected) }} {{ yearSelected }}
        </h3>
        <button type="button"
                class="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                @click="monthSelected=monthSelected - 1">
          <span class="sr-only">Mois précédent</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clip-rule="evenodd"/>
          </svg>
        </button>
        <button type="button"
                class="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                @click="monthSelected=monthSelected + 1">
          <span class="sr-only">Mois suivant</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"/>
          </svg>
        </button>
      </div>
      <div class="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
        <div>L</div>
        <div>M</div>
        <div>M</div>
        <div>J</div>
        <div>V</div>
        <div>S</div>
        <div>D</div>
      </div>
      <div class="mt-2 grid grid-cols-7 text-sm">
        <div class="py-2"
             :class="{'border-t border-gray-200': index > 6}"
             v-for="(day,index) in days" :key="day">
          <RoomItemCalendar :day :month-selected :year-selected v-model:daysSelected="daysSelected"
                            :items="getDataByDay(day)" :key="day"/>
        </div>
      </div>
    </div>
    <RoomReservations :days-selected :data-grr/>
  </div>
</template>