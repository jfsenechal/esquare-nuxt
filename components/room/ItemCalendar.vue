<script setup>
const monthSelected = defineModel('monthSelected')
const daySelected = defineModel('daySelected')
const propos = defineProps({
  today: {
    type: Date,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  yearSelected: {
    type: Number,
    required: true
  },
  items: {
    type: Array,
    required: true,
    default: []
  },
})
const isInCurrentMonthC = computed(() => {
  return isInCurrentMonth(propos.day, monthSelected.value)
})
const isToday = computed(() => {
  return propos.day === formatDate(propos.today, 'yyyy-MM-dd')
})
const isSelected = computed(() => {
  return propos.day === daySelected.value
})
const hasData = computed(() => {
  return propos.items.length > 0
})
const whatBackground = computed(() => {
  if (isSelected.value) {
    return "text-white bg-indigo-600"
  }
  if (hasData.value) {
    return "text-white bg-red-400"
  }
  if (isToday.value) {
    return "bg-esquare-yellow"
  }
  return ""
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
          :class="[isInCurrentMonthC ? 'text-gray-900' : 'text-gray-400', whatBackground]"
          @click="daySelected = day">
    <time :datetime="day">{{ formatDateString(day) }}</time>
  </button>
</template>