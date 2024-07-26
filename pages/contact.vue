<script setup>
useSeoMeta({
  title: 'Contact et accès',
})
const path = [
  {
    name: "Accueil", link: "/", id: 1
  },
]
</script>
<template>
  <BaseLayout>
    <template v-slot:header>
      <ArticleHeader icon="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4ec.svg"
                     bgimage="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000"/>
    </template>
    <template v-slot:breadcrumb>
      <WidgetsBreadcrumb :path/>
    </template>
    <template v-slot:title>
      <ArticleTitle>Contactez-nous</ArticleTitle>
    </template>
    <template v-slot>
      <p class="mt-6 text-lg prose lg:prose-xl text-gray-600">
        N'hésitez pas à nous contacter : l’e-Square est accessible à tout le monde, particulier ou entreprise,
        indépendant ou salarié, maker, bricoleur...<br>
        Une personne de contact est habituellement présente de 9h à 17h en semaine (jusque 15h le vendredi)... mais
        le mieux est de prévenir de votre venue par e-mail ou par téléphone !
      </p>
      <WidgetsPhones/>
      <WidgetsContactForm/>
    </template>
  </BaseLayout>
</template>