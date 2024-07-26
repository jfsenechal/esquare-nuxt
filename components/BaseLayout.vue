<script setup>
const message = ""
</script>
<template>
  <article class="flex flex-col relative">
    <slot name="header"></slot>
    <section class="container flex flex-col gap-2 mx-auto pl-2 md:px-24 mt-14 min-h-80">
      <slot name="breadcrumb"></slot>
      <slot name="title"></slot>
      <WidgetsShareBox/>
      <div class="mt-6 min-h-svh p-4 prose lg:prose-xl">
        <slot></slot>
      </div>
    </section>
  </article>
</template>