<script setup>
const props = defineProps({
  member: {type: Object, required: true},
})
const properties = computed(() => {
  return props.member.properties
})
const firstName = computed(() => {
  if (properties.value['Nom']['title'].length > 0)
    return properties.value['Nom']['title'][0]['plain_text']
})
const lastName = computed(() => {
  if (properties.value['Prénom']) {
    if (properties.value['Prénom']['rich_text'].length > 0)
      return properties.value['Prénom']['rich_text'][0]['plain_text']
  }
  return ''
})
const activity = computed(() => {
  if (properties.value['Nom activité/entreprise/organisme']) {
    if (properties.value['Nom activité/entreprise/organisme']['rich_text'].length > 0)
      return properties.value['Nom activité/entreprise/organisme']['rich_text'][0]['plain_text']
  }
  return ''
})
const email = computed(() => {
  if (properties.value['Email']['email']) {
    return properties.value['Email']['email']
  }
  return null
})
const website = ''
const title = ''
const image = computed(() => 'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60')
</script>
<template>
  <li
      class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
    <div class="flex flex-1 flex-col p-8">
      <img class="mx-auto h-32 w-32 flex-shrink-0 rounded-full" :src="image" alt=""/>
      <h3 class="mt-6 text-sm font-medium text-gray-900">{{ lastName }}</h3>
      <dl class="mt-1 flex flex-grow flex-col justify-between">
        <dt class="sr-only">Title</dt>
        <dd class="text-sm text-gray-500">{{ firstName }}</dd>
        <dt class="sr-only">Role</dt>
        <dd class="mt-3">
                <span
                    class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {{ activity }}</span>
        </dd>
      </dl>
    </div>
    <div>
      <div class="-mt-px flex divide-x divide-gray-200">
        <div class="flex w-0 flex-1">
          <a :href="`mailto:${email}`"
             class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
              <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
            </svg>
            Email
          </a>
        </div>
        <div class="-ml-px flex w-0 flex-1">
          <a :href="`tel:${website}`"
             class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clip-rule="evenodd" />
            </svg>
            Call
          </a>
        </div>
      </div>
    </div>
  </li>
</template>