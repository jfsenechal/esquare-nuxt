<script setup>
const propos = defineProps({
  color: {
    type: String,
    required: false,
    default: "bg-esquare-yellow"
  },
})
</script>
<template>
  <!-- WAVE -->
  <div class="w-full h-96 relative"
  :class="propos.color">
    <div class="flex flex-col prose-xl uppercase p-6">
      <span class="text-white font-bold text-2xl">
        "SE REUNIR EST UN DEBUT,<br/> RESTER ENSEMBLE EST UN PROGRES,<br/> TRAVAILLER ENSEMBLE EST LA CLÉ DE LA REUSSITE"
      </span>
      <blockquote class="text-base text-esquare-grey-lighter font-semibold ml-auto">
        Henry Ford
      </blockquote>
    </div>
    <div class="elementor-shape elementor-shape-bottom" data-negative="false">
      <!--  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path class="elementor-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
    c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
    c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
        </svg>-->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path class="elementor-shape-fill" fill-opacity="1"
              d="M0,32L60,64C120,96,240,160,360,154.7C480,149,600,75,720,69.3C840,64,960,128,1080,144C1200,160,1320,128,1380,112L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg>
    </div>
  </div>
</template>
<style>
.elementor-shape[data-negative="false"].elementor-shape-bottom, .elementor-shape[data-negative="true"].elementor-shape-top {
  transform: rotate(180deg);
}

.elementor-shape-bottom {
  bottom: -1px;
}

.elementor-shape {
  overflow: hidden;
  position: absolute;
  left: 0;
  width: 100%;
  line-height: 0;
  direction: ltr;
}

.elementor-shape .elementor-shape-fill {
  fill: #fff;
  transform-origin: center;
  transform: rotateY(0deg);
}
</style>