<script setup lang="ts">
import LanguageCardItem from './LanguageCardItem.vue';
import { useResumeStore } from '@/stores/ResumeStore';
import { storeToRefs } from 'pinia';
const resumeStore = useResumeStore();
const { resume } = storeToRefs(resumeStore);
</script>
<template>
  <div class="card">
    <h2 class="mb-4 text-lg font-semibold dark:text-night-50">{{ $t('language') }}</h2>
    <div class="flex flex-wrap gap-2">
      <LanguageCardItem v-for="(item, index) in resume.language" :key="index" :item="item" />
    </div>
  </div>
</template>
