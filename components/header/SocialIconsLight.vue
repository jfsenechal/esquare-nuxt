<script setup>
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

function fill(icon) {
  if (propos.colorFill) {
    return propos.colorFill
  }
  return icon.color
}

function svg(icon) {
  if (propos.svgFill) {
    return icon.svgWithFill
  }
  return icon.svg
}
</script>
<template>
  <ul class="flex flex-wrap items-center justify-center gap-4">
    <li :class="`[&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-[${fill(icon)}]`"
        v-for="icon in socialIcons"
        :key="icon.id">
      <a v-html=svg(icon)
         :href="icon.link"
         :title="`Retrouvez-nous sur ${icon.name}`"
         target="_blank"></a>
    </li>
  </ul>
</template>