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
const res = await fetch("http://localhost:3000/api/rooms");
res.json().then((data) => {
  state.rooms = data;
});
</script>
<template>
  <article class="flex flex-col relative mb-4 overflow-clip">
    <WidgetsMacaroon
        icon="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f468-1f3ff-200d-1f4bc.svg"
        bgimage="https://e-square.marche.be/wp-content/uploads/2020/02/20200211_092215-1-scaled.jpg"/>
    <section class="container flex flex-col gap-2 mx-auto ms-24 mt-14 min-h-80">
      <ArticleTitle>Nos salles à louer</ArticleTitle>
      <div class="flex flex-row justify-end">
        <div class="flex flex-col items-center gap-2">
          <h4 class="text-esquare-blue">Partager sur</h4>
          <HeaderSocialIconsSmall/>
        </div>
      </div>
      <div v-for="room in state.rooms" :key="room.id">
        <div class="flex flex-row space-x-40">
          <img class="w-[30rem] h-[30rem] scale-50 animate-fade-up  animate-duration-700 opacity-0 intersect:scale-100 intersect:opacity-100 transition duration-700"
               :src="room.Image.files[0].name" alt="room"/>
          <div class="flex flex-col gap-5 prose lg:prose-xl">
            <h3 class="text-2xl text-esquare-yellow font-semibold ">
              {{ room.Nom.title[0].text.content }}
            </h3>
            <p class="text-base text-esquare-grey-dark prose">{{ room.Description.rich_text[0].text.content }}</p>
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