<script setup>
const mobileMenu = ref(false)
</script>
<template>
  <header class=" w-full flex flex-row justify-center lg:justify-end items-center px-3 bg-white shadow-md h-28 lg:h-32">
    <a href="#" @click.prevent="mobileMenu = !mobileMenu" class="flex self-start pt-3 lg:hidden mr-auto ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
      </svg>
    </a>
    <NuxtLink to="/" class="mr-auto lg:self-center">
      <img src="/images/esquareLogo.jpg" alt="logo"/>
    </NuxtLink>
    <HeaderTopNavigation :mobileMenu="mobileMenu"/>
  </header>
</template>