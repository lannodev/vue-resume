<script setup lang="ts">
import { Cog6ToothIcon, EllipsisHorizontalIcon } from '@heroicons/vue/24/outline';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import SettingPopoverTheme from './SettingPopoverTheme.vue';
import SettingPopoverLanguage from './SettingPopoverLanguage.vue';
</script>

<template>
  <Popover class="relative">
    <PopoverButton
      class="rounded-lg bg-gray-100 px-0.5 text-xs text-gray-400 focus:outline-none dark:bg-night-700 dark:text-night-200 dark:hover:bg-night-600">
      <EllipsisHorizontalIcon :icon="'EllipsisHorizontalIcon'" class="h-5 w-5" />
    </PopoverButton>

    <PopoverPanel class="absolute right-0 z-10 mt-1 w-[280px] max-w-xs transform">
      <div class="rounded-lg shadow-lg">
        <div class="bg-gray-50 py-4 px-5 dark:bg-night-700">
          <span class="flex items-center gap-2">
            <Cog6ToothIcon class="h-5 w-5 text-gray-500 dark:text-night-200" />
            <span class="text-sm font-medium text-gray-900 dark:text-night-50"> {{ $t('settings.title') }} </span>
          </span>
          <!-- <span class="block text-sm text-gray-500"> Start integrating products and tools </span> -->
        </div>
        <div class="grid gap-3 bg-white py-4 px-5 dark:bg-night-600">
          <!-- Theme Settings -->
          <SettingPopoverTheme />
          <div class="border-b border-dashed border-gray-200 dark:border-night-500"></div>

          <!-- Language Settings -->
          <SettingPopoverLanguage />
        </div>
      </div>
    </PopoverPanel>
  </Popover>
</template>
