<script setup>
import {items} from "~/composables/menuItemsGet";
import {news} from "~/composables/menuItemsGet";
</script>
<template>
  <footer class="w-full min-h-[20rem] text-white ">
    <section class="bg-grey-dark p-5 pb-20 grid grid-cols-1 xl:grid-cols-3 items-start justify-around">
      <div class="flex flex-col items-center gap-3">
        <h3 class="text-2xl mb-2 font-pathway-semi-bold">Menu</h3>
        <ul class="block ml-4">
          <li v-for="link in items" :key="link.id" class="py-3 lg:py-1">
            <a :href="link.url">{{ link.name }}</a>
          </li>
        </ul>
      </div>
      <div class="flex flex-col items-center gap-3">
        <h3 class="text-2xl mb-2 font-pathway-semi-bold">Events</h3>
        <ul class="block ml-4">
          <li v-for="event in news" :key="event.id" class="py-1">
            <a :href="event.link">{{ event.name }}</a>
          </li>
        </ul>
      </div>
      <div class="flex flex-col items-center gap-3">
        <h3 class="text-2xl mb-2 font-pathway-semi-bold">L'E-SQUARE A.S.B.L</h3>
        <div class="flex flex-col items-center text-center">
          <div>
            Rue Victor-Libert 36 J<br/>
            6900 Marche-en-Famenne<br/>
            <a href="mailto:info@esquare.be">info@esquare.be</a><br/>
            <strong>Tél:</strong> +32 (0) 491 96 33 65<br/>
            <strong>Tva:</strong> BE 0699.826.888<br/>
          </div>
          <div class="flex flex-col gap-2 items-center mt-3">
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
