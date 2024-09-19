<script setup>
const mobileMenu = ref(false)
</script>
<template>
  <header class="w-full grid grid-cols-[auto_1fr] grid-rows-2 md:grid-rows-1 gap-0 h-24 lg:h-32 items-center">
    <button type="button" aria-label="Menu mobile" @click.prevent="mobileMenu = !mobileMenu" class="mt-2 md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="w-12 h-12">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
      </svg>
    </button>
    <NuxtLink to="/" class="ml-4 mt-4">
      <NuxtPicture src="/images/EsquareLogoBlackWhite.png" alt="logo" id="logoEsquare"
                   :imgAttrs="{class:'transition-all duration-500\tease-in-out\tanimate-bouncejf h-12 md:h-16'}"/>
    </NuxtLink>
    <div class="col-span-2 md:col-span-1 justify-self-end mr-4 flex flex-col items-end justify-around space-y-4">
      <HeaderTopNavigation :mobileMenu="mobileMenu"/>
      <HeaderSocialIconsLight svg-fill/>
    </div>
  </header>
</template>