<script setup>
const config = useRuntimeConfig()
const {
  pending,
  data,
  error
} = pageComposeGet(config.public.NOTION_SERVICES_ID)
const mobileMenu = ref(false)
</script>
<template>
  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
      <div class="relative flex h-20 justify-between">
        <div class="relative z-10 flex px-2 lg:px-0">
          <NuxtLink to="/" class="flex flex-shrink-0 items-center">
            <NuxtPicture src="/images/EsquareLogoBlackWhite.png" alt="logo" id="logoEsquare"
                         :imgAttrs="{class:'transition-all duration-500 tease-in-out animate-bouncejf h-16 md:h-16 w-auto '}"/>
          </NuxtLink>
        </div>
        <div class="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
          <div class="w-full sm:max-w-xs">
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd"/>
                </svg>
              </div>
              <NuxtLink to="/contact"
                        id="search"
                        class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                Contactez-nous
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="relative z-10 flex items-center">
          <!-- Mobile menu button -->
          <button type="button" @click.prevent="mobileMenu = !mobileMenu"
                  class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
      </div>
    </div>
    <!-- Mobile menu, show/hide based on menu state. -->
    <nav
        class="overflow-hidden text-center z-20 transition-all duration-700 ease-in-out"
        :class="mobileMenu ? 'h-screen' : 'h-0'"
        aria-label="Global" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2" v-if="pending">Chargement...</div>
      <div class="space-y-1 px-2 pb-3 pt-2" v-if="error">error {{ error }}</div>
      <div class="space-y-1 px-2 pb-3 pt-2" v-if="data">
        <HeaderMenuItems :child-pages="data.child_pages" v-model:mobile-menu="mobileMenu"/>
      </div>
    </nav>
  </header>
</template>