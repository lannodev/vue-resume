<script setup lang="ts">
import { Switch } from '@headlessui/vue';
import { useThemeStore } from '@/stores/ThemeStore';
const theme = useThemeStore();
/**
 * Watch theme changes
 */
theme.$subscribe(() => {
  theme.toggleTheme();
});
</script>

<template>
  <div
    class="flex items-center justify-between rounded-lg transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-50">
    <div class="mr-4">
      <p class="text-sm font-medium text-gray-900 dark:text-night-50">{{ $t('settings.theme') }}</p>
      <p class="text-sm text-gray-500 dark:text-night-300">{{ $t('settings.dark_mode') }}</p>
    </div>
    <Switch
      v-model="theme.darkMode"
      :class="theme.darkMode ? 'bg-green-500' : 'bg-gray-100 dark:bg-night-500'"
      class="relative inline-flex h-[21px] w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-opacity-75">
      <span class="sr-only">Enable Dark Mode?</span>
      <span
        aria-hidden="true"
        :class="theme.darkMode ? 'translate-x-5' : 'translate-x-0'"
        class="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out" />
    </Switch>
  </div>
</template>
