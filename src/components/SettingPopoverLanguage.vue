<script setup lang="ts">
import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
import { useResumeStore } from '@/stores/ResumeStore';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { getImagePath } from '@/helpers/Helper';
import type { Language } from '@/models/Language';

const languages: Language[] = [
  { name: 'settings.pt', code: 'pt-BR', flag: 'svg/brazil.svg' },
  { name: 'settings.en', code: 'en-US', flag: 'svg/united-states.svg' },
];

const { locale } = useI18n({ useScope: 'global' });
const selectedLanguage = languages.find((lang) => lang.code == locale.value) ?? languages[0];
const language = ref(selectedLanguage);
const resume = useResumeStore();

/**
 * Watch language changes
 * and set locale
 */
watch(language, (language) => {
  locale.value = language!.code;
  localStorage.locale = locale.value;
  resume.loadResume();
});
</script>

<template>
  <Listbox v-model="language">
    <div class="relative">
      <ListboxLabel class="mb-1 block text-sm font-medium leading-5 text-gray-700 dark:text-night-50">
        {{ $t('language') }}
      </ListboxLabel>
      <ListboxButton
        class="relative flex w-full cursor-default items-center gap-2 rounded-lg bg-gray-100 py-2 pl-2 pr-10 text-left text-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-300 dark:bg-night-500">
        <img :src="getImagePath(language.flag)" alt="country flag" class="h-6 w-6 rounded-full" />
        <span class="block truncate text-gray-500 dark:text-night-200">{{ $t(language.name) }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400 dark:text-night-300" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <ListboxOptions
          class="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-night-500">
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="language in languages"
            :key="language.name"
            :value="language">
            <li
              class="flex items-center gap-2"
              :class="[
                active
                  ? 'bg-primary-500/20 text-primary-500 dark:text-primary-500 '
                  : 'text-gray-900 dark:text-night-200',
                'relative cursor-default select-none py-2 px-2.5',
              ]">
              <img :src="getImagePath(language.flag)" alt="Avatar" class="h-6 w-6 rounded-full shadow-sm" />
              <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate ']">
                {{ $t(language.name) }}
              </span>
              <span v-if="selected" class="absolute inset-y-0 right-4 flex items-center pl-3 text-primary-500">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
