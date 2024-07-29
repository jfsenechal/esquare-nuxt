<script setup>
defineProps({
  pageTitle: {
    type: String,
    required: true,
  },
  breadcrumb: {
    type: Array,
    required: true,
  },
  cover: {
    type: String,
    required: false,
  },
  emoji: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  }
})
</script>
<template>
  <article class="flex flex-col relative">
    <slot name="header">
      <ArticleHeader :icon
                     :emoji
                     :cover/>
    </slot>
    <section class="container flex flex-col gap-2 mx-auto pl-2 md:px-24 mt-14 min-h-80">
      <slot name="breadcrumb">
        <WidgetsBreadcrumb :breadcrumb/>
      </slot>
      <slot name="title">
        <ArticleTitle>{{ pageTitle }}</ArticleTitle>
      </slot>
      <WidgetsShareBox/>
      <div class="mt-6 min-h-svh p-4 prose lg:prose-xl">
        <slot></slot>
      </div>
    </section>
  </article>
</template>