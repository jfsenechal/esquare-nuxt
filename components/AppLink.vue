<script setup>
const propos = defineProps({
  item: {
    type: Object, required: true
  },
  classCss: {
    type: String, required: false
  },
})
const item = propos.item
const classCss = propos.classCss
const typeObject = computed(() => {
  if (item.external) {
    return "external"
  }
  if (item.related) {
    const termes = item.related.__contentType.split(".");
    return termes[termes.length - 1];
  }
  return 'notfound'
})
</script>
<template>
  <NuxtLink :class="classCss"
            :to="{
                  name: 'category-slug',
                  params:{
                      slug: item.slug
                  } }"
            v-if="typeObject === 'category' ">
    <slot/>
  </NuxtLink>
  <NuxtLink :class="classCss"
            :to="{
                   name: 'article-slug',
                   params:{
                      slug: item.slug
                   } }"
            v-else-if="typeObject === 'article' || typeObject === 'page'">
    <slot/>
  </NuxtLink>
  <NuxtLink :class="classCss"
            :to="item.path"
            v-else-if="typeObject === 'external' ">
    <slot/>
  </NuxtLink>
  <NuxtLink :class="classCss"
            to="/"
            v-else>
    <slot/>
  </NuxtLink>
</template>