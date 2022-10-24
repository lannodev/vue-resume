<script setup lang="ts">
import type { Experience } from '@/models/Experience';
import HeroIcon from './HeroIcon.vue';
import { getImagePath } from '@/helpers/Helper';

defineProps<{ item: Experience; separator: boolean }>();
</script>

<template>
  <div class="mb-5 flex items-start">
    <img
      :src="getImagePath(item.companyLogo)"
      alt="Avatar"
      class="h-14 w-14 shrink-0 rounded-xl border-2 border-gray-50 shadow-sm dark:border-night-700" />
    <div class="ml-3 w-full space-y-5">
      <div class="justify-between sm:flex">
        <div class="space-y-2">
          <div class="font-medium dark:text-night-50">{{ item.job }}</div>
          <div class="space-y-1 sm:flex sm:space-x-5">
            <div class="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-night-400">
              <HeroIcon :icon="'BriefcaseIcon'" class="h-4 w-4 shrink-0" />
              <span>{{ item.company }}</span>
            </div>
            <div class="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-night-400">
              <HeroIcon :icon="'MapPinIcon'" class="h-4 w-4 shrink-0" />
              <span>{{ item.location }}</span>
            </div>
          </div>
        </div>
        <div class="flex items-start justify-between space-y-1 sm:block sm:text-right">
          <div
            class="order-last inline-flex items-center rounded-lg bg-primary-500/20 px-2 py-1 text-xs font-medium text-primary-500">
            {{ item.workType }}
          </div>
          <div class="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-night-400">
            <HeroIcon :icon="'CalendarIcon'" class="h-4 w-4 shrink-0" />
            <span>{{ item.start }} - {{ item.end }}</span>
          </div>
        </div>
      </div>
      <p class="text-sm text-gray-600 dark:text-night-300" v-html="item.description"></p>
      <div v-if="separator" class="border-b border-dashed border-gray-200 dark:border-night-600"></div>
    </div>
  </div>
</template>
