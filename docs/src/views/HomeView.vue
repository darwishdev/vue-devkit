<script setup lang="ts">
import { AppNavigation, AppImage, AppIcon } from 'vue-devkit'
import { useCounterStore } from '../stores/counter';
const counetStore = useCounterStore()
</script>

<template>
  <div>
    <h1>counter: {{ counetStore.count }}</h1>
    <h2 class="text-purple-600" @click="counetStore.increment">appform</h2>
    {{ $t('brand') }}
    <AppIcon icon="" />
    <AppImage />
    <AppNavigation id="1" />
  </div>
</template>
