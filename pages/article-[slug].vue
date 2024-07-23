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
const post = {
  title: 'Tournoi Super Smash Bros',
  link: '/',
  icon: 'https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f3ae.svg',
  image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000'
}
</script>
<template>
  <article class="flex flex-col relative overflow-clip">
    <ArticleHeader :icon="post.icon"
                   :bgimage="post.image"/>
    <section class="container flex flex-col gap-2 mx-auto md:ms-24 mt-14 min-h-80">
      <WidgetsBreadcrumb :path/>
      <ArticleTitle>{{ post.title }}</ArticleTitle>
      <WidgetsShareBox/>
      <div class="mt-6 min-h-svh p-4 prose lg:prose-xl">
        Première édition du tournoi Eternal dans la province du Luxembourg !<br/><br/>
        Le tournoi Eternal aura lieu pour la première fois le 3 août 2024 à l'Esquare, situé au 36 Rue Victor Libert,
        1er étage, à Marche-en-Famenne.
        <br/>
        <h3 class="text-xl font-bold text-esquare-blue">Infos générales</h3>
        <span class="font-bold">Date et horaire :</span><br/>
        Samedi 3 août 2024, de 9h30 à 19h30.
        <span class="font-bold">Lieu :</span> Esquare, 36 Rue Victor Libert, 1er étage, 6900
        Marche-en-Famenne.<br/>
        <span class="font-bold">Inscription :</span> 10€ sur place par PayPal ou virement rapide au compte bancaire BE35
        0637 4878
        2037 en mentionnant "Eternal Smash" + votre pseudo. <br/>
        <span class="font-bold">Participants :</span> Maximum 32 joueurs, inscrivez-vous rapidement !
        <br/>
        <h3 class="text-xl font-bold text-esquare-green-dark">Programme de la journée</h3>
        9h30 : Ouverture des portes. 10h00 : Début du side-event random rule set. 13h00 : Début du bracket
        principal.<br/>
        19h00 : Fin du tournoi. 19h30 : Fermeture de la salle. Une assiette de croque-monsieur sera offerte aux
        participants lors de l'inscription pour le déjeuner.<br/><br/>
        Il y aura des prix pour les 3 premiers<br/>
        1er: 40€ 2ème: 25€ 3ème: 15€<br/>
        N'oublie pas d'apporter ta switch, ta manette, ton dock, ton alim, et ton cable hdmi.<br/>
        <br/>

        <div class="grid gap-4 lg:grid-cols-2">
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

      </div>
    </section>
  </article>
</template>