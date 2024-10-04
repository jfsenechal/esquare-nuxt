<script setup>
const {pageTitle, breadcrumb, cover, emoji, icon, status, error} = defineProps({
  pageTitle: {
    type: String,
    required: true,
  },
  breadcrumb: {
    type: Array,
    required: false,
    default: []
  },
  cover: {
    type: String,
    required: false,
    default: null,
  },
  emoji: {
    type: String,
    default: null,
    required: false,
  },
  icon: {
    type: String,
    default: null,
    required: false,
  },
  status: {
    type: String,
    required: false,
    default: null
  },
  error: {
    type: Object,
    required: false,
    default: null
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
        <div class="flex flex-row space-between">
          <ArticleTitle>{{ pageTitle }}</ArticleTitle>
          <WidgetsShareBox/>
        </div>
      </slot>
      <WidgetsError :error v-if="error"/>
      <WidgetsLoader v-if="status === 'pending'"/>
      <div class="mt-3 min-h-svh p-4" v-else>
        <slot></slot>
      </div>
    </section>
  </article>
</template>