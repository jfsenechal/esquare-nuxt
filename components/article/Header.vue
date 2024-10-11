<script setup>
const config = useRuntimeConfig()
const {cover} = defineProps({
  icon: {
    type: String,
    required: false,
    default: null,
  },
  emoji: {
    type: String,
    required: false,
    default: null,
  },
  cover: {
    type: String,
    required: false,
    default: null,
  },
})
const coverComputed = computed(() => cover ?? config.public.DEFAULT_COVER)
</script>
<template>
  <header class="bg-gray-200" style="height: 30vh">
    <NuxtImg class="w-full object-center-50 block"
             style="height: 30vh;"
             :src="coverComputed"
             alt=""/>
    <!-- ICON -->
    <div class="max-w-32 ms-2 md:ms-24 -mt-12">
      <img class="h-24 w-24 sm:h-20 sm:w-20 animate-bounce-in-top duration-700"
           :src="icon"
           alt=""
           v-if="icon">
      <div class=" text-8xl sm:text-7xl animate-bounce-in-top duration-700"
           v-if="emoji">
        {{ emoji }}
      </div>
    </div>
  </header>
</template>