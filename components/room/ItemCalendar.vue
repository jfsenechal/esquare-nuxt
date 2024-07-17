<script setup>
const monthSelected = defineModel('monthSelected')
const propos = defineProps({
  day: {
    type: String,
    required: true,
  },
  yearSelected: {
    type: Number,
    required: true
  },
})
const isInCurrentMonthC = computed(() => {
  return isInCurrentMonth(propos.day, monthSelected.value)
})
const isToday = computed(() => {

})
const isSelected = computed(() => {

})
</script>
<template>
  <!--
            Always include: "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
            Is selected, include: "text-white"
            Is not selected and is today, include: "text-indigo-600"
            Is not selected and is not today and is current month, include: "text-gray-900"
            Is not selected and is not today and is not current month, include: "text-gray-400"
            Is selected and is today, include: "bg-indigo-600"
            Is selected and is not today, include: "bg-gray-900"
            Is not selected, include: "hover:bg-gray-200"
            Is selected or is today, include: "font-semibold"
          -->
  <button type="button"
          class="mx-auto flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-200"
          :class="[isInCurrentMonthC ? 'text-gray-900' : 'text-gray-400']">
    <time :datetime="propos.day">{{ formatDate(day) }}</time>
  </button>
</template>