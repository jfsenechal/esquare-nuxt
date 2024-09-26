<script setup>
//https://merakiui.com/components/application-ui/breadcrumbs
const route = useRoute();
const {
  status,
  data,
  error
} = propertyComposeGet(route.params.id)
const props = defineProps({
  breadcrumb: {
    type: Array,
    required: false,
    default: []
  }
})
const dottedOrNot = computed(() => {
  return links.value.length > 1
})
const links = ref([])
if (props.breadcrumb.length > 0) {
  console.log('props bread')
  links.value = props.breadcrumb
}
watch(data, (newValue) => {
  const path = []
  const urls = []
  newValue.reverse().forEach(item => {
    const name = getNamePage(item)
    const url = `/${slugify(name)}/${item.id}`
    urls.push(url)
    path.push({
      label: name,
      icon: 'i-heroicons-home',
      to: urls.join('')
    })
  })
  links.value = path
  console.log(links.vue)
})
//:to="{name:'secteurs-slug',params:{slug:category.slugname}}"
</script>
<template>
  <section>
    <WidgetsLoader v-if="status === 'pending'"/>
    <WidgetsError v-else-if="error" :error/>
    <nav class="flex" aria-label="Breadcrumb" v-else>
      <ol role="list" class="flex items-center space-x-4">
        <li class="flex items-center" title="Retour à l'accueil">
          <NuxtLink to="/" class="text-gray-400 hover:text-gray-500">
            <svg class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                    clip-rule="evenodd"/>
            </svg>
            <span class="sr-only">Accueil</span>
          </NuxtLink>
        </li>
        <li class="flex md:hidden items-center" v-if="dottedOrNot">
          <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"/>
          </svg>
          <span class="ml-4 font-medium text-gray-500 hover:text-gray-700">
          ...
        </span>
        </li>
        <li class="hidden md:flex items-center" v-for="(item,index) in links" :key="index">
          <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"/>
          </svg>
          <NuxtLink :to="item.to" class="ml-4 font-medium text-gray-500 hover:text-gray-700">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ol>
    </nav>
  </section>
</template>
<style>
ol li:last-child {
  display: flex;
}
</style>