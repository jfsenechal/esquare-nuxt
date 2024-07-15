<script setup>
/*useHead({
  script: [
    {
      src: 'https://unpkg.com/tailwindcss-intersect@2.0.1/dist/observer.min.js',
      tagPosition: 'head',
      defer: true
    }
  ]
})*/
const state = reactive({
  rooms: [],
});
const path = [{name: "Accueil", link: "/", id: 1}]
const res = await fetch("http://localhost:3000/api/rooms");
res.json().then((data) => {
  state.rooms = data;
});
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
      <div class="mt-6 min-h-svh p-4">
        <p class="text-2xl text-esquare-brown font-semibold ">
          Toutes nos salles sont équipé de :
        </p>
        <WidgetsRoomEquipment/>
        <div v-for="room in state.rooms" :key="room.id"
             class="flex flex-row items-center  e44ven:flex-row-reverse justify-between  mb-2">
          <img
              class="w-[50rem] sc44ale-50 animate-fade-up animate-duration-700 opacity-0 intersect:scale-100 intersect:opacity-100 transition duration-700"
              :src="room.Image.files[0].name" alt="room"/>
          <div class="flex flex-col items-center prose lg:prose-xl ml-4 ">
            <h3 class="text-2xl text-esquare-yellow font-semibold ">
              {{ room.Nom.title[0].text.content }}
            </h3>
            <span class="text-esquare-grey-dark">{{ room.Description.rich_text[0].text.content }}</span>
            <NuxtLink :to="`salles-a-louer/reserver-zeze}`"
                      class="animate-up text-esquare-black flex flex-row  justify-center items-center h-16 w-80 border-8 border-t-esquare-blue border-r-esquare-yellow border-b-esquare-blue border-l-esquare-yellow">
              Réservation et tarifs
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>