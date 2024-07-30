<script setup lang="ts">
//https://play.tailwindcss.com/Pxaduu1tUN
//https://tw-elements.com/docs/standard/components/social-buttons/
import {socialIcons} from "~/constants/socialsNetwork";

const propos = defineProps({
  svgFill: {
    type: Boolean,
    required: false,
    default: false
  },
  colorFill: {
    type: String,
    required: false,
    default: null
  },
})

function fill(icon: { type: Object }) {
  if (propos.colorFill) {
    return propos.colorFill
  }
  return icon.color
}

function svg(icon: { type: Object }) {
  if (propos.svgFill) {
    return icon.svgWithFill
  }
  return icon.svg
}
</script>
<template>
  <div class="flex flex-wrap items-center justify-center gap-4">
    <a
        :class="`[&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-[${fill(icon)}]`"
        :href="icon.link"
        v-html=svg(icon)
        v-for="icon in socialIcons"
        :key="icon.id"
        :title="`Retrouvez-nous sur ${icon.name}`"
        target="_blank">
    </a>
  </div>
</template>