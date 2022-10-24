<script setup lang="ts">
import type { Certificate } from '@/models/Certificate';
import HeroIcon from './HeroIcon.vue';
import { getImagePath } from '@/helpers/Helper';

defineProps<{ item: Certificate; separator: boolean }>();
</script>

<template>
  <div class="mb-5 flex items-start">
    <img
      :src="getImagePath(item.schoolLogo)"
      alt="school logo"
      class="h-14 w-14 shrink-0 rounded-xl border-2 border-gray-50 shadow-sm dark:border-night-700" />
    <div class="ml-3 w-full space-y-5">
      <div class="items-start justify-between sm:flex">
        <div class="mb-2 space-y-1.5 text-gray-400 dark:text-night-400">
          <div class="font-medium text-gray-900 dark:text-night-50">{{ item.course }}</div>
          <span class="text-sm font-medium">{{ item.course }}</span>
          <div class="text-xs">{{ item.issueDate }} · {{ item.expirationDate }}</div>
          <div v-if="item.credentialCode" class="text-xs">
            {{ $t('credential_code') }}
            <span class="rounded-xl bg-primary-500/10 py-1 px-1 text-primary-500">{{ item.credentialCode }}</span>
          </div>
        </div>
        <a
          v-if="item.url"
          :href="item.url"
          target="_blank"
          class="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gray-100 px-2 py-2 text-xs text-gray-400 hover:bg-gray-100 dark:border-night-700 dark:text-night-300 dark:hover:bg-night-700">
          <span>{{ $t('credential') }}</span>
          <HeroIcon :icon="'ArrowTopRightOnSquareIcon'" class="h-4 w-4 stroke-2" />
        </a>
      </div>
      <div v-if="separator" class="hidden border-b border-dashed border-gray-200 dark:border-night-600"></div>
    </div>
  </div>
</template>
