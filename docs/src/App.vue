<script setup lang="ts">
import Button from 'primevue/button'
import { changeLocale } from '@formkit/vue'
import { ref } from 'vue';
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark-mode');
}
const currentLocaleRef = ref<'en' | 'ar'>('en')
function toggleLocale() {
  currentLocaleRef.value = currentLocaleRef.value == 'ar' ? 'en' : 'ar'
  changeLocale(currentLocaleRef.value)
  const dirMap: { ar: string, en: string } = { ar: 'rtl', en: 'ltr' }
  document.documentElement.setAttribute('dir', dirMap[currentLocaleRef.value]);
}
</script>

<template>



  <button class="border-2 px-2 py-1 mb-4" @click="toggleLocale">
    toggle locale
  </button>
  <Button label="toggle locale" @click="toggleDarkMode()" />
  <Button label="Toggle Dark Mode" @click="toggleDarkMode()" />
  <RouterView />
</template>
