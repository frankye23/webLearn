<script setup lang="ts">
import { reactive } from 'vue'
// import { sendRequest } from '~/utils/request'

const state = reactive({
  message: '',
  response: '',
})
// import { storageDemo } from '~/logic/storage'

// function openOptionsPage() {
//   browser.runtime.openOptionsPage()
// }
async function sendMessage() {

}
</script>

<template>
  <Header />
  <main class="w-[360px] px-4 pb-5 pt-2 text-gray-700">
    <Chat />
    <!-- input -->
    <div class="relative mt-12 rounded-md shadow-sm">
      <input v-model="state.message" type="text" class="block w-full rounded-md border-0 py-1.5 pr-10 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Send your message...">
      <div class="absolute inset-y-0 right-0 flex items-center pr-3">
        <icon-park-outline:send-one class="cursor-pointer h-5 w-5 text-gray-400" aria-hidden="true" @click="sendMessage" />
      </div>
    </div>
  </main>
</template>
