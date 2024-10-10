<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";
import {Fade, AutoPlay, Arrow, Parallax, Pagination} from "@egjs/flicking-plugins";

const items = [
  {
    name: 'Minecraft Day',
    to: 'https://github.com/Atinux',
    src: 'https://picsum.photos/1920/1080?random=1',
    id: 1
  },
  {
    name: 'Semaine du coworking',
    to: 'https://github.com/Atinux',
    src: 'https://picsum.photos/1920/1080?random=2',
    id: 2
  },
  {
    name: 'Journée "Les clés du succès"',
    to: 'https://github.com/Atinux',
    src: 'https://picsum.photos/1920/1080?random=3',
    id: 3
  },
  {
    name: 'Comment séduire mon banquier ?',
    to: 'https://github.com/Atinux',
    src: 'https://picsum.photos/1920/1080?random=4',
    id: 4
  },
  {
    name: 'Mind & Market',
    to: 'article-esquare-0dcf77ca3c1349b08d19afc5092129f3',
    src: 'https://picsum.photos/1920/1080?random=5',
    id: 5
  },
]
const plugins = [
  // new Fade(),
  new AutoPlay(4000, "NEXT"),
//  new Parallax(),
  new Arrow(),
  new Pagination(),
];
</script>
<template>
  <flicking
      :options="{ circular: true, moveType: 'freeScroll' }"
      :viewportTag="'div'"
      :cameraTag="'div'"
      :cameraClass="''"
      :plugins="plugins"
      @need-panel="e => {
      // ADD PANELS
    }"
  >
    <div v-for="item in items" :key="item.id"
         :style="`background-image: url('${item.src}')`"
         class="w-1/2 h-96 flex flex-col items-start justify-end bg-cover">
      <span class="text-4xl text-white uppercase font-bold p-3 mb-4">{{ item.name }}</span>
    </div>
    <template #viewport>
      <span class="flicking-arrow-prev"></span>
      <span class="flicking-arrow-next"></span>
      <div class="flicking-pagination"></div>
    </template>
  </flicking>
</template>
<style>
@import url("@egjs/vue3-flicking/dist/flicking.css");
@import url("@egjs/flicking-plugins/dist/flicking-plugins.css");
</style>