<script setup lang="ts">
import type { NuxtError } from '#app'

const error = useError();
const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>
<!--
<template>
  <div>
    <h2>{{ error.statusCode }}</h2>
    <button @click="handleError">Clear errors</button>
  </div>
  <NuxtErrorBoundary>
  <NuxtPage />
  <template #error="{ error }">
    <div>
      <p>
        Oh no, something broke when loading the lesson!
        <code>{{ error }}</code>
      </p>
      <p>
        <button
          class="hover:cursor-pointer"
          @click="clearError(error)"
        >
          Go to the first lesson
        </button>
      </p>
    </div>
  </template>
</NuxtErrorBoundary>
</template>
-->
<template>
  <NuxtLayout>
    <div class="flex flex-col">
      <div v-if="error.statusCode === '404'" class="prose">
        <h1>404</h1>
        <p>I guess that page doesn't exist.</p>
      </div>
      <div v-else class="prose">
        <h1>Dang</h1>
        <p>It looks like something broke.</p>
        <p>Sorry about that.</p>
      </div>
      <div class="prose mt-5">
        <p>
          <strong>{{ error.message }}</strong>
        </p>
        <p>
          Go to the
          <a
            class="hover:cursor-pointer"
            @click="handleError"
          >
            Homepage.
          </a>
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>
