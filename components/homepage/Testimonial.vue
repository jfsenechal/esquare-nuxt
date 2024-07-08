<script setup lang="ts">
//https://codepen.io/thirus/pen/abyzaKN?editors=1100
//https://tympanus.net/Development/HoverEffectIdeas/index.html
//https://codepen.io/shadeed/pen/NWzrjVR/83da07fda0c07756629e660b1bc7e69f?editors=1100
//https://play.tailwindcss.com/SvBc6xaRWJ
</script>
<template>
  <div class="mx-auto mt-2 sm:mt-5 sm:px-6 lg:px-0">
    <div
        class="relative overflow-hidden bg-esquare-yellow px-6 py-20 shadow-xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
      <img class="absolute inset-0 h-full w-full object-cover object-center-center brightness-125 saturate-0"
           src="/public/images/batimentaerien.jpg"
           alt="">
      <div class="absolute inset-0 bg-yellow-default/90 mix-blend-multiply"></div>
      <div class="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-esquare-yellow to-esquare-black opacity-[0.45]"
             style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
           aria-hidden="true">
        <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-esquare-yellow to-esquare-blue opacity-25"
             style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="relative mx-auto max-w-2xl lg:mx-0">
        <h3 class="block h-12 w-auto text-5xl text-white uppercase font-bold">E-square</h3>
        <figure>
          <blockquote class="mt-6 text-lg font-semibold text-white sm:text-2xl sm:leading-8">
            <p>"
              C’est par la rencontre et l’échange de points de vue que les idées fleurissent ;
              et c’est par l’échange de capacités et de compétences qu’elles se réalisent.
              Si vous avez envie d’entreprendre, de créer ou de co-créer, vous êtes au bon endroit."</p>
          </blockquote>
          <figcaption class="mt-6 text-base text-white">
            <div class="font-semibold">Marche-en-Famenne</div>
            <div class="mt-1"> </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>