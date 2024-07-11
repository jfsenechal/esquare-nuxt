<script setup>
import {departments} from "~/composables/menuItemsGet";

const route = useRoute()
const slug = route.params.slug
const department = departments.find(obj => obj.slug === slug)

const path = [{name: "Espace", link: "/espace", id: 1}]

</script>
<template>
  <article class="flex flex-col relative">
    <ArticleHeader icon="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f3ae.svg"
                   :bgimage="department.image"/>
    <section class="container flex flex-col gap-2 mx-auto ms-2 md:ms-24 mt-14 min-h-80">
      <WidgetsBreadcrumb :path/>
      <ArticleTitle>{{ department.name }}</ArticleTitle>
      <WidgetsShareBox/>
      <div class="mt-6 min-h-svh p-4 prose lg:prose-xl">
        Welcome to space {{ department.name }}
        <p>{{ department.description }}</p>

        <h4 class="text-xl p-8">Informations, horaires, tarifs photos...</h4>
      </div>
    </section>
  </article>
</template>