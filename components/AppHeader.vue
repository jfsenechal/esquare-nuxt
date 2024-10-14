<script setup>
const {
  status,
  data,
  error
} = menuComposeGet()
const mobileMenu = ref(false)
</script>
<template>
  <header
      class="grid grid-cols-[auto_1fr] md:grid-cols-[auto_auto_1fr_auto] grid-rows-2 md:grid-rows-1 bg-white/5 shadow  top-0 backdrop-blur-md z-30">
    <div class="relative z-30 flex items-center">
      <!-- Mobile menu button -->
      <button type="button" @click.prevent="mobileMenu = !mobileMenu"
              class="relative inline-flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-esquare-yellow"
              aria-controls="mobile-menu" aria-expanded="false">
        <span class="absolute -inset-0.5"></span>
        <span class="sr-only">Open menu</span>
        <!--
          Icon when menu is closed.
          Menu open: "hidden", Menu closed: "block"
        -->
        <svg class="h-12 w-12"
             :class="mobileMenu ? 'hidden':'block'"
             fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>
        <!--
          Icon when menu is open.
          Menu open: "block", Menu closed: "hidden"
        -->
        <svg class="h-12 w-12"
             :class="mobileMenu ? 'block':'hidden'"
             fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <NuxtLink to="/" @click.prevent="mobileMenu = false" class="flex items-center mt-2 mx-2 ">
      <NuxtImg src="/images/EsquareLogoBlackWhite.png" alt="logo" id="logoEsquare"
               class="h-12 transition-all duration-500 tease-in-out animate-bouncejf md:h-16 w-auto"/>
    </NuxtLink>
    <HeaderContactLink v-model:mobile-menu="mobileMenu"/>
    <div class="col-span-2 md:col-span-1 justify-self-end mr-4 flex flex-col items-end justify-around space-y-4">
      <HeaderSocialIconsLight svg-fill/>
    </div>
    <nav
        :class="mobileMenu ? 'h-screen' : 'h-0'"
        class="overflow-hidden text-center z-30 bg-white flex flex-col absolute left-0 right-0 top-28 md:top-[4.5rem] w-full items-center text-lg mr-4 text-esquare-grey-dark transition-all duration-700 ease-in-out "
        aria-label="Global"
        id="mobile-menu">
      <WidgetsError :error v-if="error"/>
      <WidgetsLoader v-if="status === 'pending'"/>
      <div class="px-2 pb-3 pt-2 flex flex-col text-lg h-screen z-[1000]" v-else>
        <HeaderMenuItems :child-pages="data ?? []" v-model:mobile-menu="mobileMenu"/>
      </div>
    </nav>
  </header>
</template>