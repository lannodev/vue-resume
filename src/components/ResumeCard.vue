<script setup lang="ts">
import InfoCardItem from './InfoCardItem.vue';
import HeroIcon from './HeroIcon.vue';
import { useResumeStore } from '@/stores/ResumeStore';
import { storeToRefs } from 'pinia';
const resumeStore = useResumeStore();
const { resume } = storeToRefs(resumeStore);
</script>

<template>
  <div class="card">
    <h2 class="mb-4 text-lg font-semibold dark:text-night-50">{{ $t('resume') }}</h2>
    <InfoCardItem :key="0" :item="resume.cv">
      <a
        :href="resume.cv.url"
        target="_blank"
        class="cursor-pointer rounded-full bg-primary-500/20 py-2.5 px-2.5 text-primary-500">
        <HeroIcon :icon="'ArrowDownTrayIcon'" class="stroke- h-5 w-5 hover:animate-pulse" />
      </a>
    </InfoCardItem>
  </div>
</template>
