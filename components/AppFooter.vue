<script setup>
const config = useRuntimeConfig()
const {
  pending,
  data,
  error
} = pageComposeGet(config.public.NOTION_SERVICES_ID)

function name(item) {
  return item.properties.title.title[0].text.content
}

function generateLink(item) {
  return `services/${slugify(name(item))}/${item.id}`
}
</script>
<template>
  <footer class="w-full min-h-[20rem] text-white ">
    <section class="bg-grey-dark p-5 pb-10 grid grid-cols-1 gap-3 xl:grid-cols-3 items-start justify-around">
      <div class="flex flex-col items-start md:items-center gap-3">
        <h3 class="text-2xl mb-2 font-roboto font-semi-bold">Menu</h3>
        <div class="block ml-4" v-if="pending">Chargement...</div>
        <div class="block ml-4" v-if="error">error {{ error }}</div>
        <ul class="block ml-4" v-if="data">
          <li v-for="item in data.childPages" :key="item.id" class="text-sm py-1 uppercase">
            <NuxtLink :to="generateLink(item)">{{ name(item) }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex flex-col items-start md:items-center gap-3">
        <h3 class="text-2xl mb-2 font-roboto font-semi-bold">Menu2</h3>
        <div class="block ml-4" v-if="pending">Chargement...</div>
        <div class="block ml-4" v-if="error">error {{ error }}</div>
        <ul class="block ml-4" v-if="data">
          <li v-for="item in data.childPages" :key="item.id" class="py-1">
            <NuxtLink :to="generateLink(item)">{{ name(item) }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex flex-col items-center gap-3">
        <h3 class="text-2xl mb-2 font-roboto font-semi-bold">L'E-SQUARE</h3>
        <div class="flex flex-col items-center text-center">
          <div>
            Rue Victor-Libert 36 J<br/>
            6900 Marche-en-Famenne<br/>
            <a href="mailto:info@esquare.be">info@esquare.be</a><br/>
            <strong>Tél:</strong> +32 (0) 84 32 70 54<br/>
          </div>
          <div class="flex flex-col gap-2 items-center my-3">
            <a href="/" class="animate">
              <img src="/images/EsquareLogoWhiteBlack.png" alt="marche.be" class="h-8">
            </a>
            <a href="https://www.marche.be/" target="_blank" class="animate">
              <img src="/images/Marche-logo.png" alt="adl" class="h-16">
            </a>
          </div>
          <HeaderSocialIconsLight color-fill="#FFFFFF" :svg-fill="false"/>
        </div>
      </div>
    </section>
    <FooterCopyright/>
  </footer>
</template>
