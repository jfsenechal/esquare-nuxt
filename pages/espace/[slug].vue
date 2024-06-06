<script setup>
const route = useRoute()
const router = useRouter()
const slug = route.params.slug
const breadcrumbs = []
</script>
<template>
  <section class="h-[100vh]">
    <WidgetsBreadcrumb :breadcrumbs="[]"/>
    Welcome to the Espace Page! {{ slug }}
  </section>
</template>