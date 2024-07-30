<script setup lang="ts">
//https://play.tailwindcss.com/Pxaduu1tUN
//https://tw-elements.com/docs/standard/components/social-buttons/
import {socialIcons} from "~/constants/socialsNetwork";

const icons = socialIcons.filter((icon) => icon.shareLink)
const url = useRequestURL()
</script>
<template>
  <div class="flex flex-wrap items-center justify-center gap-2">
    <NuxtLink v-for="icon in icons" :key="icon.id"
              class="group relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-xl bg-[#0f1419] text-white transition duration-150 hover:ring-4 hover:ring-[#0f1419]/25 active:ring-0"
              :class="`${icon.colorBg} ${icon.ringColor}`"
              :v-if="icon.shareLink"
              :to="`${icon.shareLink}${url.href}`"
              target="_blank"
              external>
      <span
          class="absolute scale-0 rounded-full bg-white/25 transition duration-200 ease-out group-active:scale-100"></span>
      <div
          class="absolute inset-0 flex items-center justify-center transition duration-150 ease-in group-hover:-translate-y-full group-hover:opacity-0"
          v-html=icon.svg>
      </div>
      <HeaderSocialIconShareSvg/>
    </NuxtLink>
  </div>
</template>