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
const path = [{name: "Accueil", link: "/", id: 1}]
const {
  pending,
  data,
  error
} = roomsComposeGet()
onMounted(async () => {

})
function slugify(text) {return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}
</script>
<template>
  <article class="flex flex-col relative overflow-clip">
    <ArticleHeader
        icon="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f468-1f3ff-200d-1f4bc.svg"
        bgimage="https://e-square.marche.be/wp-content/uploads/2020/02/20200211_092215-1-scaled.jpg"/>
    <section class="container flex flex-col gap-2 mx-auto ms-2 md:ms-24 mt-14 min-h-80">
      <WidgetsBreadcrumb :path/>
      <ArticleTitle>Nos salles à louer</ArticleTitle>
      <WidgetsShareBox/>
      <div class="mt-6 min-h-svh p-4 text-center">
        <p class="text-2xl text-esquare-brown font-semibold ">
          Toutes nos salles sont équipées de :
        </p>
        <RoomEquipment/>
        <div v-if="pending">Loading...</div>
        <div v-else>
          <div v-for="(room,index) in data" :key="index"
               class="flex flex-col md:flex-row items-center md:even:flex-row-reverse mb-2 even:translate-x-1/3 -translate-x-1/3 intersect:translate-x-0 transition ease-out duration-500">
            <img
                class="w-[18rem] md:w-[50rem] mb-2 md:mb-0"
                :src="room.Image.files[0].name" alt="room"/>
            <div class="flex flex-col items-center prose lg:prose-xl ml-4 ">
              <h3 class="text-2xl text-esquare-yellow font-semibold ">
                {{ room.Nom.title[0].text.content }}
              </h3>
              <span class="text-esquare-grey-dark">{{ room.Description.rich_text[0].text.content }}</span>
              <NuxtLink :to="`salles-a-louer/reserver-${slugify(room.Nom.title[0].text.content)}-${room.GrrId.number}`"
                        :key="room.GrrId.number"
                        class="animate-up text-esquare-black flex flex-row  justify-center items-center h-16 w-80 border-8 border-t-esquare-blue border-r-esquare-yellow border-b-esquare-blue border-l-esquare-yellow">
                Réservation et tarifs
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>