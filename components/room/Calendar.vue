<script setup>
const today = getToday()
const daySelected = ref(null)
const yearSelected = ref(Number(formatDate(today, 'yyyy')))
const monthSelected = ref(Number(formatDate(today, 'MM')))
const days = ref(getFullWeeksIncludingOverflow(yearSelected.value, monthSelected.value))
watch(monthSelected, (newX) => {
  days.value = getFullWeeksIncludingOverflow(yearSelected.value, newX)
})
watch(daySelected, (newX) => {
  console.log("day " + newX)
})

function isFirstWeek(index) {
  return index > 6
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
             :class="{'border-t border-gray-200': isFirstWeek(index)}"
             v-for="(day,index) in days" :key="index">
          <RoomItemCalendar :day :month-selected :year-selected :today v-model:daySelected="daySelected"/>
        </div>
      </div>
    </div>
    <section class="mt-12 md:mt-0 md:pl-14">
      <h2 class="text-base font-semibold leading-6 text-gray-900">
        Réservation(s)
        <time :datetime="daySelected" v-if="daySelected">pour le {{ daySelected }}</time>
        <span class="text-esquare-brown" v-else>Veuillez sélectionner une date</span>
      </h2>
      <ol class="mt-4 space-y-1 text-sm leading-6 text-gray-500">
        <li class="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100">
          <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="" class="h-10 w-10 flex-none rounded-full">
          <div class="flex-auto">
            <p class="text-gray-900">Leslie Alexander</p>
            <p class="mt-0.5">
              <time datetime="2022-01-21T13:00">1:00 PM</time>
              -
              <time datetime="2022-01-21T14:30">2:30 PM</time>
            </p>
          </div>
        </li>
      </ol>
    </section>
  </div>

</template>