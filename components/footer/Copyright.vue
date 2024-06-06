<script setup lang="ts">
const year = 2024
</script>
<template>
  <div class="bg-grey-footer text-white w-full py-5">
    {{ year }} - Réalisation et gestion du site par
    <a href="http://epn.marche.be/" target="_blank" title="Espace public numérique">
      Epn</a> - Copyright © {{ year }} - Marche-en-Famenne. Tous droits réservés
    <span class="flex items-center lg:justify-end">
        <a href="#"
           title="Découvrez les conditions générales de notre site">Conditions générales</a> -
        <a href="#" title="Vie privée">Vie privée</a>
    </span>
  </div>
</template>