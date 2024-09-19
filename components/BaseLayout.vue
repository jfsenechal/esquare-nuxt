<script setup>
const pending = defineModel('pending', {type: Boolean, default: false})
const error = defineModel('error', {type: Object, default: null})
defineProps({
  pageTitle: {
    type: String,
    required: true,
  },
  breadcrumb: {
    type: Array,
    required: true,
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
      <div v-if="pending">Chargement...</div>
      <div v-if="error" class="accent-red-500">error: {{ error }}</div>
      <div class="mt-6 min-h-svh p-4">
        <slot></slot>
      </div>
    </section>
  </article>
</template>