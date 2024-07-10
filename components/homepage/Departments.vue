<script setup lang="ts">
import {IconCube, IconBadge3d, IconUsersGroup, IconDevices2, IconYoga, IconBuildingFortress} from '@tabler/icons-vue'

const departments = [
  {
    name: 'CO-WORKING',
    description: 'Notre espace de coworking est l\'endroit idéal pour lancer et développer votre activité.N\'hésitez pas à venir tester !',
    link: '/espace/coworking',
    icon: IconUsersGroup,
    color: 'text-green-500',
    id: 1
  },
  {
    name: 'E-CUBE',
    description: '"E-cube", un programme conçu spécialement pour accompagner les porteurs de projets, les starters et les entreprises dans leur parcours entrepreneurial et d\'innovation',
    link: '/espace/ecube',
    icon: IconCube,
    color: 'text-pink-500',
    id: 2
  },
  {
    name: 'EPN',
    description: 'L’espace public numérique. Accès aux ordinateurs ou connexion au wi-fi. Scanner et impressions. ',
    link: '/espace/epn',
    icon: IconDevices2,
    color: 'text-blue-500',
    id: 3
  },
  {
    name: 'FABLAB',
    description: 'Venez donner vie à vos projets dans cet atelier partagé disposant de nombreux outils à commande numérique.Accessible à toutes et à tous !',
    link: '/espace/fablab',
    icon: IconBadge3d,
    color: 'text-red-500',
    id: 4
  },
  {
    name: 'SALLES DE REUNION',
    description: 'Vous cherchez un endroit parfaitement équipé pour vos réunions, formations, conférences ? Nous vous proposons un vaste choix à l\'e-Square.',
    link: '/espace/salles',
    icon: IconYoga,
    color: 'text-yellow-500',
    id: 5
  },
  {
    name: 'SERVICES DE LA VILLE',
    description: 'Plan de cohésion sociale, prévention, transition écologique, Agence de développement local sont parmis nous',
    link: '/espace/services-ville',
    icon: IconBuildingFortress,
    color: 'text-purple-500',
    id: 6
  },
]
</script>
<template>
  <section class="container mx-auto ">
    <WidgetsTitle>Nos espaces</WidgetsTitle>
    <ul class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <li v-for="department in departments" :key="department.id"
          class="flex flex-col items-center group group-hover:text-esquare-green-dark text-center">
        <NuxtLink :to="department.link">
          <component :is="department.icon" class="h-12 w-12 group-hover:text-esquare-green-dark"
                     :class="department.color"></component>
        </NuxtLink>
        <div class="prose xl:prose-xl flex flex-col p-3 md:p-6">
          <NuxtLink :to="department.link"
                    class="block mt-2 text-xl font-semibold font-roboto text-esquare-black transition-colors duration-300 transform hover:text-esquare-green-dark hover:underline"
                    tabindex="0" role="link">
            {{ department.name }}
          </NuxtLink>
          <p class="hidden md:block mt-2 text-base text-gray-600 dark:text-gray-400 self-start">
            {{ department.description }}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>