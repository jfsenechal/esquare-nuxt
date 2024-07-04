<script setup>
const route = useRoute()
const slug = route.params.slug
const path = []
</script>
<template>
  <article class="flex flex-col relative">
    <WidgetsMacaroon/>
    <section class="container flex flex-col gap-2 mx-auto ms-24 mt-14 min-h-80">
      <WidgetsBreadcrumb :breadcrumbs="path"/>
      <WidgetsTitleTmp>Découvertes de l'Espace-Gaming</WidgetsTitleTmp>
      <div class="flex flex-row justify-end">
        <div class="flex flex-col items-center gap-2">
          <h4 class="text-esquare-blue">Partager sur</h4>
          <HeaderSocialIconsSmall/>
        </div>
      </div>
      <div class="mt-6 min-h-svh p-4">
        Content
      </div>
    </section>
  </article>
</template>