<script setup lang="ts">
import type { Education } from '@/models/Education';
import HeroIcon from './HeroIcon.vue';
import { getImagePath } from '@/helpers/Helper';

defineProps<{ item: Education; separator: boolean }>();
</script>

<template>
  <div class="mb-5 flex items-start">
    <img
      :src="getImagePath(item.collegeLogo)"
      alt="Avatar"
      class="h-14 w-14 shrink-0 rounded-xl border-2 border-gray-50 shadow-sm dark:border-night-700" />
    <div class="ml-3 w-full space-y-5">
      <div class="items-start justify-between sm:flex">
        <div class="mb-1 space-y-1.5">
          <div class="font-medium dark:text-night-50">{{ item.college }}</div>
          <div class="flex space-x-5">
            <div class="flex items-start gap-1 text-sm font-medium text-gray-400 dark:text-night-400">
              <!-- <HeroIcon :icon="'AcademicCapIcon'" class="h-4 w-4 shrink-0" /> -->
              <span class="max-w-sm">{{ item.course }}</span>
            </div>
          </div>
        </div>
        <div class="items-start space-y-2">
          <div class="flex gap-1 text-sm font-medium text-gray-400 dark:text-night-400">
            <HeroIcon :icon="'CalendarIcon'" class="h-4 w-4 shrink-0" />
            <span>{{ item.start }} – {{ item.end }}</span>
          </div>
        </div>
      </div>
      <div v-if="separator" class="border-b border-dashed border-gray-200 dark:border-night-600"></div>
    </div>
  </div>
</template>
