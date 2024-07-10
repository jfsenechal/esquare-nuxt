<script setup lang="ts">
import {departments} from "~/composables/menuItemsGet";
</script>
<template>
  <section class="container mx-auto ">
    <WidgetsTitle>Nos espaces</WidgetsTitle>
    <ul class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <li v-for="department in departments" :key="department.id"
          class="flex flex-col items-center group group-hover:text-esquare-green-dark text-center">
        <NuxtLink :to="department.link">
          <component :is="department.icon" class="h-12 w-12 group-hover:text-esquare-green-dark"
                     :class="department.color"></component>
        </NuxtLink>
        <div class="prose xl:prose-xl flex flex-col p-3 md:p-6">
          <NuxtLink :to="department.link"
                    class="block mt-2 text-xl font-semibold font-roboto text-esquare-black transition-colors duration-300 transform hover:text-esquare-green-dark hover:underline"
                    tabindex="0" role="link">
            {{ department.name }}
          </NuxtLink>
          <p class="hidden md:block mt-2 text-base text-gray-600 dark:text-gray-400 self-start">
            {{ department.description }}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>