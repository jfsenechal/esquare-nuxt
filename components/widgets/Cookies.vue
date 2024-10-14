<script setup lang="ts">
const config = useRuntimeConfig()
//https://merakiui.com/components/application-ui/cookies
//https://masteringnuxt.com/blog/how-to-read-and-write-cookies-in-nuxt-3?s=03
//https://akalfood.com/fr/
const cookiesOpen = defineModel('cookiesOpen')
</script>
<template>
  <section
      class="isolate z-10 fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-12 bottom-16 dark:border-gray-700 rounded-2xl">
    <h4 class="font-semibold text-gray-800 dark:text-white">🍪 Cookie Notice</h4>

    <p class="mt-4 text-sm text-gray-600 dark:text-gray-300">
      We use cookies to ensure that we give you the best
      experience on our website.
      <NuxtLink :to="`rgpd/${config.public.NOTION_RGPD_ID}`" class="text-esquare-blue hover:underline">
        Read cookies policies.
      </NuxtLink>
    </p>

    <div class="flex items-center justify-between mt-4 gap-x-4 shrink-0">
      <button
          class="text-xs text-gray-800 underline transition-colors duration-300 dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none">
        Manage your preferences
      </button>
      <button
          class=" text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
          @click="cookiesOpen = !cookiesOpen">
        Accept
      </button>
    </div>
  </section>
</template>