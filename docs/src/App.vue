<script setup lang="ts">
import Button from 'primevue/button'
import { changeLocale } from '@formkit/vue'
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { translationList, type SUPPORTE_LOCALES_TYPE } from './i18n.config';

const i18n = useI18n()
const loadLocale = () => {
  return new Promise<void>((resolve) => {
    const locale = i18n.locale.value as SUPPORTE_LOCALES_TYPE
    console.log("localse s", locale)
    translationList(locale).then(response => {
      i18n.setLocaleMessage(locale, response)
      resolve()
    }).catch(() => resolve())
  })
}
onMounted(() => {
  loadLocale()
})
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}
const currentLocaleRef = ref<'en' | 'ar'>('en')
function toggleLocale() {
  currentLocaleRef.value = currentLocaleRef.value == 'ar' ? 'en' : 'ar'
  changeLocale(currentLocaleRef.value)
  loadLocale()
  const dirMap: { ar: string, en: string } = { ar: 'rtl', en: 'ltr' }
  i18n.locale.value = currentLocaleRef.value
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
