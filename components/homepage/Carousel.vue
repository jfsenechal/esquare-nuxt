<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";
import { Fade, AutoPlay } from "@egjs/flicking-plugins";
const plugins = [new Fade(), new AutoPlay(2000, "NEXT")];

const items = [
  {
    name: 'Sébastien Chopin',
    to: 'https://github.com/Atinux',
    src: 'https://picsum.photos/1920/1080?random=1',
    id:1
  },
  {
    name: 'Sébastien Chopin',
    to: 'https://github.com/Atinux',
    src: 'https://picsum.photos/1920/1080?random=2',
    id:2
  },
  {
    name: 'Sébastien Chopin',
    to: 'https://github.com/Atinux',
    src: 'https://picsum.photos/1920/1080?random=3',
    id:3
  },
  {
    name: 'Sébastien Chopin',
    to: 'https://github.com/Atinux',
    src: 'https://picsum.photos/1920/1080?random=4',
    id:4
  },
  {
    name: 'Sébastien Chopin',
    to: 'https://github.com/Atinux',
    src: 'https://picsum.photos/1920/1080?random=5',
    id:5
  },
]
onMounted(() => {

})
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
        class="w-full border border-red-300 h-44">
      <img :src="item.src" alt="img" class="object-cover" />
    </div>
  </flicking>
</template>
<style>
@import url("node_modules/@egjs/vue3-flicking/dist/flicking.css");
</style>