<script setup>
const openBook = defineModel('openBook')
const config = useRuntimeConfig()
const person = defineModel({default: {name: 'jf', email: 'jf@marche', phone: '084', street: 'bois'}})
const didItWork = ref(false)
const props = defineProps({
  daysSelected: {
    type: Array,
    default: []
  }
})

const {error, data, status, refresh} = useFetch(`${config.public.API_URL_GRR}/nuxt/addbook.php`, {
  method: 'POST',
  body: {person},
  immediate: false,
  watch: false,
  type: 'application/json',
  onResponse(context) {
    console.log(context)
  }
})

async function addBook() {
  console.log(person.value.name + "new2")
  await refresh()
  if (!error.value) {
    didItWork.value = true
  }
}
</script>
<template>
  <form @submit.prevent="addBook">
    <div class="mt-24">
      <div class="border-b border-gray-900/10 pb-12">
        {{ data }}
        <p class="mt-1 text-sm leading-6 text-gray-600">
          Si vous avez des besoins particuliers n'hésitez pas à nous contacter au .
        </p>
        <h2 class="text-base font-semibold leading-7 text-gray-900">Vos coordonnées</h2>
        <div class="mt-10 grid  grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
          <div class="sm:col-span-full">
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nom et prénom</label>
            <div class="mt-2">
              <input type="text" name="name" id="name" autocomplete="name"
                     v-model="person.name"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div class="">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Adresse mail</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email"
                     v-model="person.email"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div class="">
            <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Téléphone</label>
            <div class="mt-2">
              <input type="text" name="phone" id="phone" autocomplete="phone"
                     v-model="person.phone"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div class="col-span-full">
            <label for="street" class="block text-sm font-medium leading-6 text-gray-900">Adresse de facturation</label>
            <div class="mt-2">
              <input type="text" name="street" id="street" autocomplete="adresse"
                     v-model="person.street"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <div class="sm:col-span-full">
            <label for="vat" class="block text-sm font-medium leading-6 text-gray-900">Numéro de TVA</label>
            <div class="mt-2">
              <input type="text" name="vat" id="vat" autocomplete="tva"
                     v-model="person.vat"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

        </div>
        <div class="border-b border-gray-900/10 pb-12">
          <div class="mt-10 space-y-10">
            <fieldset>
              <legend class="text-sm font-semibold leading-6 text-gray-900">Horaires</legend>
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
    <div class="text-base text-red-500" v-if="error">{{ error }}</div>
    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900"
              @click="openBook=false">Annuler
      </button>
      <button type="button"
              @click="addBook"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Valider
      </button>
    </div>
  </form>

</template>