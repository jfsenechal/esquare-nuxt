<script setup>
definePageMeta({
  middleware: [
    function (to, from) {
      const config = useRuntimeConfig()
      if (from.path === '/services') {
        return navigateTo('/services/' + config.public.NOTION_SERVICES_ID)
      }
    },
  ],
})
</script>
<template>
  <div>Page service</div>
</template>