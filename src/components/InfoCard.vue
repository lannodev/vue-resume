<script setup lang="ts">
import InfoCardItem from './InfoCardItem.vue';
import { useResumeStore } from '@/stores/ResumeStore';
import { storeToRefs } from 'pinia';
const resumeStore = useResumeStore();
const { resume } = storeToRefs(resumeStore);
</script>

<template>
  <div class="card">
    <!-- Start info title -->
    <h2 class="mb-4 text-lg font-semibold dark:text-night-50">{{ $t('information') }}</h2>
    <div class="space-y-4">
      <InfoCardItem v-for="(item, index) in resume.information" :key="index" :item="item" />
    </div>
  </div>
</template>
