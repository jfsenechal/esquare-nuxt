<script setup>
const monthSelected = defineModel('monthSelected')
const daysSelected = defineModel('daysSelected')
const propos = defineProps({
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

function addDay(day) {
  const index = daysSelected.value.indexOf(day);
  if (index === -1) {
    daysSelected.value.push(day);
  } else {
    daysSelected.value.splice(index, 1);
  }
}

const isInCurrentMonthC = computed(() => {
  return isInCurrentMonth(propos.day, monthSelected.value)
})
const isSelected = computed(() => {
 return  daysSelected.value.indexOf(propos.day)!== -1
})
const hasData = computed(() => {
  return propos.items.length > 0
})
const whatBackground = computed(() => {
  if (isSelected.value) {
    return "text-white bg-esquare-yellow"
  }
  if (hasData.value) {
    return "text-white bg-red-400"
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
          @click="addDay(day)">
    <time :datetime="day">{{ formatDateString(day) }}</time>
  </button>
</template>