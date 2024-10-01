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
  <div>
    <p class="text-2xl text-esquare-brown font-semibold ">
      Toutes nos salles sont équipées de :
    </p>
    <ul role="list" class="flex flex-row gap-5 my-4">
      <li v-for="equipment in equipments" :key="equipment.id" class="flex rounded-md shadow-sm h-12">
        <div
            class="flex w-16 items-center justify-center rounded-l-md bg-esquare-blue text-white">
          <component :is="equipment.icon"></component>
        </div>
        <div
            class="flex items-center justify-between rounded-r-md border-b border-r border-t border-gray-200 bg-white">
          <div class="flex-1 px-4 py-2 ">
            <span class="font-medium text-gray-900 hover:text-gray-600">{{ equipment.name }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>