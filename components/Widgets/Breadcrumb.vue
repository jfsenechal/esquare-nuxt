<script setup lang="ts">
//https://merakiui.com/components/application-ui/breadcrumbs
const path = [
  {
    name: "Tiers-lieu", link: "/", id: 1
  },
  {
    name: "Espace", link: "/espace", id: 2
  },
  {
    name: "Co-Working", link: "/espace/co-working", id: 3
  }
]
defineProps({
  breadcrumbs: {
    type: Array,
    required: true,
  },
})
</script>
<template>
  <div class="flex items-center py-4 overflow-x-auto whitespace-nowrap">
    <a href="/" class="text-gray-600 dark:text-gray-200">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
      </svg>
    </a>

    <template v-for="item in path" :key="item.id">
    <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"/>
        </svg>
    </span>
      <NuxtLink :to="item.link" class="text-gray-600 dark:text-gray-200 hover:underline">
        {{ item.name }}
      </NuxtLink>
    </template>

  </div>
</template>