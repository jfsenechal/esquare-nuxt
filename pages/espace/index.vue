<script setup>
const path = []
</script>
<template>
  <article class="flex flex-col relative">
    <WidgetsMacaroon icon="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f3ae.svg"
                     bgimage="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000"/>
    <section class="container flex flex-col gap-2 mx-auto ms-2 md:ms-24 mt-14 min-h-80">
      <WidgetsBreadcrumb :breadcrumbs="path"/>
      <ArticleTitle>{{ post.title }}</ArticleTitle>
      <WidgetsShareBox/>
      <div class="mt-6 min-h-svh p-4 prose lg:prose-xl">
        <HomepageDepartments/>
      </div>
    </section>
  </article>
</template>