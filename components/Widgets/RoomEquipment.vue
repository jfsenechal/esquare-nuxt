<script setup>
import {IconWifi, IconCoffee, IconDeviceTv, IconDeviceProjector, IconChalkboard} from '@tabler/icons-vue'

const equipments = [
  {
    name: 'Wifi',
    icon: IconWifi,
    id: 1
  },
  {
    name: 'Café/thé dans la cuisine',
    icon: IconCoffee,
    id: 2
  },
  {
    name: 'Smart TV',
    icon: IconDeviceTv,
    id: 3
  },
  {
    name: 'Projecteur',
    icon: IconDeviceProjector,
    id: 4
  },
  {
    name: 'Tableau blanc',
    icon: IconChalkboard,
    id: 5
  }
]
</script>
<template>
  <ul class="flex flex-row gap-2 items-center">
    <li class="pointer-events-auto flex flex-col gap-2 items-center justify-center shadow-lg p-3 w-48 h-48 hover:text-esquare-green-dark"
        v-for="equipment in equipments" :key="equipment.id">
      <component :is="equipment.icon"></component>
      <span class="text-esquare-blue">{{ equipment.name }}</span>
    </li>
  </ul>
</template>