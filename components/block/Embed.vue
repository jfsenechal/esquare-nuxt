<script setup>
defineProps({
  block: {
    type: Object
  }
})
//https://www.google.com/maps/embed/v1/view?key=AIzaSyCNwCbz1CjCScdV_qOyeAZfafYUHRKmtNA&amp;center=50.2287722,5.3351372&amp;zoom=17
//https://www.google.com/maps/@50.2287722,5.3351372,17.24z?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D
//https://developers.google.com/maps/documentation/embed/quickstart
</script>
<template>
  <section class="relative w-[75rem] h-[45rem]">
    <iframe
        src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCNwCbz1CjCScdV_qOyeAZfafYUHRKmtNA&amp;center=50.2287722,5.3351372&amp;zoom=17"
        frameborder="0"
        sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin allow-storage-access-by-user-activation allow-popups-to-escape-sandbox"
        allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  loading="lazy"
        style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; border-radius: 1px; pointer-events: auto; background-color: white;"></iframe>
   <!-- <iframe
        :id="block.id"
        :title="block.embed.caption.length > 0 ? block.embed.caption[0].text.content: ''"
        width="80%"
        height="600"
        :src="block.embed.url"
        sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin allow-storage-access-by-user-activation allow-popups-to-escape-sandbox"
        allowfullscreen=""
        referrerpolicy="origin"
        style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; border-radius: 1px; pointer-events: auto; background-color: white;">
    </iframe>-->

  </section>
</template>