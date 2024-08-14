<script setup lang="ts">
//https://codepen.io/shadeed/pen/NWzrjVR/83da07fda0c07756629e660b1bc7e69f?editors=1100
</script>
<template>
  <section class="hero grid relative bg-black">
    <div class="hero__wrapper px-4 text-white flex-1 grid w-full pl-0 pr-0">
      <div class="hero__content">
        <h2 class="hero__headline font-ro2boto">E-square - Tiers lieu</h2>
        <blockquote
            class="mt-6 text-lg font-semibold text-white sm:text-2xl sm:leading-8 md:whitespace-nowrap md:overflow-hidden md:animate-typing">
          "SE REUNIR EST UN DEBUT, RESTER ENSEMBLE EST UN PROGRES, TRAVAILLER ENSEMBLE EST LA CLÉ DE LA REUSSITE"
        </blockquote>
      </div>
      <NuxtImg class="absolute inset-0 w-full h-full object-cover max-w-full object-[center_25%]"
               src="/images/batimentaerien.jpg" alt=""/>
    </div>
  </section>
</template>
<style>
/* bg-gradient-to-r from-slate-300 to-slate-500 */
.hero {
  --gradient-dir: to top;
  min-height: calc(300px + 15vw);

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.9;
    background: linear-gradient(
        var(--gradient-dir),
        hsl(0, 0%, 0%) 0%,
        hsla(0, 0%, 0%, 0.995) 8.2%,
        hsla(0, 0%, 0%, 0.981) 16%,
        hsla(0, 0%, 0%, 0.958) 23.4%,
        hsla(0, 0%, 0%, 0.926) 30.4%,
        hsla(0, 0%, 0%, 0.885) 37.3%,
        hsla(0, 0%, 0%, 0.835) 43.8%,
        hsla(0, 0%, 0%, 0.776) 50.2%,
        hsla(0, 0%, 0%, 0.709) 56.5%,
        hsla(0, 0%, 0%, 0.633) 62.6%,
        hsla(0, 0%, 0%, 0.548) 68.7%,
        hsla(0, 0%, 0%, 0.455) 74.8%,
        hsla(0, 0%, 0%, 0.354) 81%,
        hsla(0, 0%, 0%, 0.244) 87.2%,
        hsla(0, 0%, 0%, 0.126) 93.5%,
        hsla(0, 0%, 0%, 0) 100%
    ) left center/100% no-repeat;
  }

}

@media (min-width: 800px) {
  .hero {
    --gradient-dir: to right;
  }
}

.hero__wrapper {
  place-content: end start;

  @media (min-width: 800px) {
    place-content: center start;
  }
}

.hero__content {
  flex: 1;
  z-index: 2;
  padding: 1rem 0 1rem 1rem;

  blockquote {
    color: #fff;
    font-size: clamp(1rem, 5vw, 1.25rem);
  }
}

.hero__headline {
  color: #fff;
  font-size: clamp(1.35rem, 6vw, 2.15rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.hero {
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 300;
  line-height: 1.35;
}

</style>