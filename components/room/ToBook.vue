<script setup lang="ts">
//https://lexingtonthemes.com/tutorials/how-to-create-a-javascript-free-modal-popup-with-only-tailwind-css/
import { onClickOutside } from '@vueuse/core'

const target = ref(null)
const roomId = useRoute().params.id
const openBook = defineModel('openBook')
const prop = defineProps({
  roomId: {
    type: Number, required: false, default: 0
  },
  daysSelected: {
    type: Array, required: false, default: []
  },
})
onClickOutside(target, event => console.log(event))
</script>
<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" ref="target">
    <!--
      Background backdrop, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <transition
        enter-active-class="ease-out duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" v-if="openBook"></div>
    </transition>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto" v-if="openBook">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <!--
          Modal panel, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
        <transition
            enter-active-class="ease-out duration-300"
            enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
              v-if="openBook">
            <RoomForm v-model:open-book="openBook" :daysSelected />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>