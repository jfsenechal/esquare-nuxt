<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: '',
    required: true,
  },
  bgimage: {
    type: String,
    default: '',
    required: true
  },
})
</script>
<template>
  <header class="bg-gray-200" style="height: 30vh">
    <img class="w-full object-center-50 block translate-x-2/3 intersect:translate-x-0 transition"
         style="height: 30vh;"
         :src="bgimage"
         alt="">
    <!-- ICON -->
    <div class="max-w-32 ms-2 md:ms-24 -mt-12">
      <img class="h-24 w-24 roun4ded-full rin4g-4 ring-4bl4ue-300 sm:h-20 sm:w-20 animate-bounce-in-top duration-700"
           :src="icon"
           alt="">
    </div>
  </header>
</template>