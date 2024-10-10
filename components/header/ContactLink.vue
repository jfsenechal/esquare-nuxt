<script setup>
const mobileMenu = defineModel('mobileMenu', {type: Boolean, default: false})
</script>
<template>
  <div class="hidden md:flex relative items-center justify-center mx-6 px-6">
    <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"
             aria-hidden="true">
          <defs fill="#0067a1"/>
          <path d="m56,12v10l-24,12-24-12v-10h48ZM8,26.47v25.53h48v-25.53l-24,12-24-12Z" fill="#0067a1"/>
        </svg>
      </div>
      <NuxtLink to="/contact"
                id="search"
                @click.prevent="mobileMenu = false"
                class="text-base sm:leading-6 md:text-xl block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
        Contactez-nous
      </NuxtLink>
    </div>
  </div>
</template>