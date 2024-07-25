<script setup>
useHead({
  script: [
    {
      src: 'https://unpkg.com/tailwindcss-intersect@2.0.1/dist/observer.min.js',
      tagPosition: 'head',
      defer: true
    }
  ]
})
const route = useRoute()
const path = [
  {
    name: "Actualités", link: "/actualites", id: 1
  },
]
const {
  pending,
  data,
  error
} = pageComposeGet()

const post = {
  title: 'Tournoi Super Smash Bros',
  link: '/',
  icon: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f3ae.svg',
  image2: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000',
  description: 'ma super description'
}
const name = computed(() => data.value?.properties.title.title[0].text.content)
const image = computed(() => data.value?.cover.external.url)
const emoji = computed(() => data.value?.icon.emoji)
useSeoMeta({
  title: () => `${post.title ?? ''}`,
  description: () => `${post.description ?? ''}`
})
</script>
<template>
  <article class="flex flex-col relative overflow-clip">
    <ArticleHeader :icon="post.icon"
                   :emoji="emoji"
                   :bgimage="image"/>
    <section class="container flex flex-col gap-2 mx-auto pl-2 md:px-24 mt-14 min-h-80">
      <WidgetsBreadcrumb :path/>
      <ArticleTitle>{{ name }}</ArticleTitle>
      <WidgetsShareBox/>
      <div class="mt-6 min-h-svh p-4 prose lg:prose-xl">
        {{ error }}
        <div v-for="block in data.children.results" :key="block.id">
          <BlockParagraph :block="block" v-if="block.type === 'paragraph'"/>
          <BlockImage :block="block" v-if="block.type === 'image'"/>
          <BlockHeading :block="block" v-if="block.type.includes('heading')"/>
        </div>

       <!-- <div class="grid gap-4 lg:grid-cols-2">
          <div class="scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition duration-700">
            <nuxt-img src="/images/fablab/449924545_774884834811582_4951520691865757433_n.jpg"
                      class="w-full h-96 object-cover bg-slate-300 rounded"/>
          </div>
          <div
              class="scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition duration-700 lg:delay-200">
            <nuxt-img src="/images/fablab/449930250_774885114811554_6919154571691000124_n.jpg"
                      class="w-full h-96 object-cover bg-slate-300 rounded"/>
          </div>
          <div class="scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition duration-700">
            <nuxt-img src="/images/fablab/450235778_774884361478296_517705644484769887_n.jpg"
                      class="w-full h-96 object-cover bg-slate-300 rounded"/>
          </div>
          <div
              class="scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition duration-700 lg:delay-200">
            <nuxt-img src="/images/fablab/450238009_774885731478159_5327024289325802134_n.jpg"
                      class="w-full h-96 object-cover bg-slate-300 rounded"/>
          </div>
        </div>

        <div class="translate-x-1/3 intersect:translate-x-0 transition ease-out duration-500">
          <nuxt-img src="/images/fablab/450242584_774891001477632_7982454322734905203_n.jpg"
                    class="w-full h-80 object-cover bg-slate-300 rounded"/>
        </div>

        <iframe width="860" height="715" src="https://www.youtube.com/embed/dgi5D4uf7JA?si=tF3zFGuc76FXnDHC"
                class="aspect-video"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
-->
      </div>
    </section>
  </article>
</template>