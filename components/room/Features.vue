<script setup>
import {IconUsers, IconCoinEuro} from '@tabler/icons-vue'

const props = defineProps({
  room: {
    type: Object,
    required: true,
  }
})
</script>
<template>
  <section class="grid grid-cols-2 tr4ail">
    <ul class="list-none">
      <li class="flex flex-row">
        <IconUsers class="mr-2"/>
        <span class="font-semibold text-esquare-green-light">
          Nombre de personnes
        </span>
      </li>
      <li class="flex flex-row">
        <IconCoinEuro class="mr-2"/>
        <span class="font-semibold text-esquare-green-light">Prix la journée</span>
      </li>
      <li class="flex flex-row">
        <IconCoinEuro class="mr-2"/>
        <span class="font-semibold text-esquare-green-light">Prix la demi journée</span>
      </li>
    </ul>
    <ul class="list-none">
      <li>{{ room.NbrePersonnes.rich_text[0].text.content }}</li>
      <li>{{ room.TarifHalf.number }} €</li>
      <li>{{ room.TarifFull.number }} €</li>
    </ul>
  </section>
</template>