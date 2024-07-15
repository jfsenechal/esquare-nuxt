<script setup lang="ts">
//https://codepen.io/thirus/pen/PoBmeKj?editors=1100
//https://codepen.io/shadeed/pen/yLpWBmP
</script>
<template>
  <h3 class="text-esquare-yellow font-roboto font-bold my-8 px-2 uppercase flex items-center">
  <span
      aria-hidden="true"
      class="h-0.5 grow rounded bg-gray-200 dark:bg-gray-700/75"></span>
    <span class="mx-3 text-4xl font-semibold">
      <slot></slot>
    </span>
    <span
        aria-hidden="true"
        class="h-0.5 grow rounded bg-gray-200 dark:bg-gray-700/75"></span>
  </h3>
</template>