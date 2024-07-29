<script setup>
const config = useRuntimeConfig()
useSeoMeta({
  title: 'Nos espaces',
})
const {
  pending,
  data,
  error
} = pageComposeGet(config.public.NOTION_ESPACE_ID)
const path = [{name: "Accueil", link: "/", id: 1}]
const name = computed(() => data.value?.properties.title.title[0].text.content)
const cover = computed(() => data.value?.cover?.external.url)
const emoji = computed(() => data.value?.icon?.emoji)

function slugify(text) {
  return text.toString().toLowerCase()
      .replace(/\s+/g, '')
      .replace(/[^\w]+/g, '')
}
useSeoMeta({
  title: () => `${name.value ?? ''}`,
})
</script>
<template>
  <BaseLayout>
    <template v-slot:header>
      <ArticleHeader :cover
                     :emoji/>
    </template>
    <template v-slot:breadcrumb>
      <WidgetsBreadcrumb :path/>
    </template>
    <template v-slot:title>
      <ArticleTitle>{{ name }}</ArticleTitle>
    </template>
    <template v-slot>
      <div v-if="pending">Chargement...</div>
      <div v-if="error">error {{ error }}</div>
      <ul class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <li v-for="space in data.children" :key="space.id">
          <div
              class="flex flex-col items-center group group-hover:text-esquare-green-dark text-center scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition duration-700"
              v-if="space.type === 'child_page'">
            <NuxtLink
                :to="`espace/${slugify(space.child_page.title)}/${slugify(space.id)}`">
                <span
                    class="text-8xl sm:text-7xl group-hover:text-esquare-green-dark"
                    :class="space.color ?? ''">
                {{ space.page.icon.emoji }}
              </span>
            </NuxtLink>
            <div class="prose xl:prose-xl flex flex-col p-3 md:p-6">
              <NuxtLink to="/"
                        class="block mt-2 text-xl font-semibold font-roboto text-esquare-black transition-colors duration-300 transform hover:text-esquare-green-dark hover:underline"
                        tabindex="0" role="link">
                {{ space.child_page.title }}
              </NuxtLink>
              <div v-for="child in data.children" :key="space.id">
                <div v-if="child.type === 'paragraph'"
                     class="hidden md:block mt-2 text-base text-gray-600 dark:text-gray-400 self-start">
                  <BlockRichText :texts="child.paragraph.rich_text"/>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </template>
  </BaseLayout>
</template>