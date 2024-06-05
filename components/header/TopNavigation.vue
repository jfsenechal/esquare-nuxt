<script setup>
import {IconLogin} from '@tabler/icons-vue'
import navigationItemsGet from "~/composables/navigationItemsGet";
const {mobileMenu = false} = defineProps(['mobileMenu'])
const {data: items2} = navigationItemsGet()
const url = computed(()=>{

})
const items = [
  {name: 'CO-WORKING', link: '', icon: '', color: '', id: 1},
  {name: 'E-CUBE', link: '', icon: '', color: '', id: 2},
  {name: 'EPN', link: '', icon: '', color: '', id: 3},
  {name: 'FABLAB', link: '', icon: '', color: '', id: 4},
  {name: 'SALLES DE REUNION', link: '', icon: '', color: '', id: 5},
]
</script>
<template>
  <nav
      :class="mobileMenu ? 'h-screen' : 'h-0'"
      class="overflow-hidden z-20  lg:h-full lg:z-auto bg-white flex flex-col lg:flex-row lg:gap-4 absolute lg:static left-0 right-0 top-28 w-full lg:w-auto items-center text-lg mr-4 font-pathway-regular text-grey-dark transition-all duration-700 ease-in-out ">
    <AppLink v-for="item in items" :key="item.id"
              :item="item"
              :classCss="`flex flex-col lg:block items-center justify-center w-full lg:w-auto p-4 lg:p-0 hover:text-blue-default border-t-2 lg:border-0 border-grey-lighter`">
      {{ item.name }}
    </AppLink>
    <NuxtLink to="/" class="w-6 space-x-6 lg:mr-4">
      <IconLogin alt="login"/>
    </NuxtLink>
  </nav>
</template>