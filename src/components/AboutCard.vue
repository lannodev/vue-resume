<script setup lang="ts">
import { RouterLink } from 'vue-router';
import HeroIcon from './HeroIcon.vue';
import { useResumeStore } from '@/stores/ResumeStore';
import { storeToRefs } from 'pinia';

const resumeStore = useResumeStore();
const { resume } = storeToRefs(resumeStore);

const menu = [
  { route: '/', name: 'menu.experience', icon: 'BriefcaseIcon' },
  { route: 'education', name: 'menu.education', icon: 'AcademicCapIcon' },
  { route: 'project', name: 'menu.project', icon: 'CodeBracketIcon' },
];
</script>

<template>
  <div class="card">
    <h2 class="mb-4 text-lg font-semibold dark:text-night-50">{{ $t('about') }}</h2>
    <p class="mb-5 text-sm text-gray-600 dark:text-night-200">
      {{ resume.profile.aboutMe }}
    </p>
    <!-- <div class="my-5 border-t border-dashed border-gray-200"></div> -->
    <ul class="inline-flex space-x-2 font-semibold">
      <!-- Menu -->
      <li v-for="(item, index) of menu" :key="index">
        <router-link
          :to="item.route"
          class="inline-flex cursor-pointer items-center gap-1 rounded-lg border-2 border-gray-100 px-2 py-1.5 text-xs font-medium text-gray-400 hover:border-primary-500 hover:bg-primary-500 hover:text-white dark:border-night-700 dark:text-night-400 dark:hover:border-primary-500 dark:hover:bg-primary-500/20 dark:hover:text-primary-500">
          <HeroIcon :icon="item.icon" class="hidden h-4 w-4 sm:block" />
          <span>{{ $t(item.name) }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
