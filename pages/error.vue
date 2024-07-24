<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

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