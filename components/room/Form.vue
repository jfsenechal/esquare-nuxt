<script setup>
const openBook = defineModel('openBook')

const pending = ref(null)
const data = ref(null)
const error = ref(null)

async function submit() {
  pending.value = true;
  data.value = null;
  error.value = null;
  try {
    const result = await bookPost();
    data.value = result.data;
  } catch (err) {
    error.value = err;
  } finally {
    pending.value = false;
  }
}
</script>
<template>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        {{ data }} {{ error }}
        <h2 class="text-base font-semibold leading-7 text-gray-900">Vos coordonnées</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-full">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Nom et prénom</label>
            <div class="mt-2">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div class="sm:col-span-full">
            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Numéro de TVA</label>
            <div class="mt-2">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div class="sm:col-span-full">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Adresse mail</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div class="sm:col-span-full">
            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Téléphone</label>
            <div class="mt-2">
              <input type="text" name="city" id="city" autocomplete="address-level2"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div class="col-span-full">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Adresse de
              facturation</label>
            <div class="mt-2">
              <input type="text" name="street-address" id="street-address" autocomplete="street-address"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
        </div>
        <div class="border-b border-gray-900/10 pb-12">
          <div class="mt-10 space-y-10">
            <fieldset>
              <legend class="text-sm font-semibold leading-6 text-gray-900">Horaires</legend>
              <p class="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
              <div class="mt-6 space-y-6">
                <div class="flex items-center gap-x-3">
                  <input id="push-everything" name="push-notifications" type="radio"
                         class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                  <label for="push-everything"
                         class="block text-sm font-medium leading-6 text-gray-900">7h à 9h</label>
                </div>
                <div class="flex items-center gap-x-3">
                  <input id="push-email" name="push-notifications" type="radio"
                         class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                  <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">9h à 13h</label>
                </div>
                <div class="flex items-center gap-x-3">
                  <input id="push-nothing" name="push-notifications" type="radio"
                         class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                  <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">9h à 17h</label>
                </div>
                <div class="flex items-center gap-x-3">
                  <input id="push-nothing" name="push-notifications" type="radio"
                         class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                  <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">13h à 17h</label>
                </div>
                <div class="flex items-center gap-x-3">
                  <input id="push-nothing" name="push-notifications" type="radio"
                         class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                  <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">18h à 22h</label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900"
              @click="openBook=false">Annuler
      </button>
      <button type="submit"
              @click="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Valider
      </button>
    </div>
  </form>

</template>