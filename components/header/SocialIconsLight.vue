<script setup lang="ts">
//https://play.tailwindcss.com/Pxaduu1tUN
//https://tw-elements.com/docs/standard/components/social-buttons/
import {socialIcons} from "~/composables/menuItemsGet";
</script>
<template>
  <div class="flex flex-wrap items-center justify-center gap-2">
    <a
        :class="`[&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-[${icon.color}]`"
        :href="icon.link"
        v-html=icon.svgWithFill
        v-for="icon in socialIcons"
        :key="icon.id"
        :title="`Retrouvez-nous sur ${icon.name}` "
        target="_blank">
    </a>
  </div>
</template>