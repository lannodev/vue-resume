<script setup lang="ts">
import { RouterView } from 'vue-router';
import ProfileCard from '@/components/ProfileCard.vue';
import ResumeCard from '@/components/ResumeCard.vue';
import InfoCard from '@/components/InfoCard.vue';
import SkillCard from '@/components/SkillCard.vue';
import LanguageCard from './components/LanguageCard.vue';
import AboutCard from './components/AboutCard.vue';

import { useThemeStore } from '@/stores/ThemeStore';
import { useResumeStore } from '@/stores/ResumeStore';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' });

onMounted(() => {
  /** Load theme */
  const theme = useThemeStore();
  theme.loadTheme();
  /** Load Resume Language */
  const resume = useResumeStore();
  resume.loadResume();
  /** Set Locale */
  if ('locale' in localStorage) {
    locale.value = localStorage.locale;
  }
});
</script>

<template>
  <main class="container mx-auto max-w-6xl px-4 py-4">
    <div class="gap-5 sm:grid lg:grid-cols-3">
      <!-- Start left side -->
      <div class="space-y-5">
        <!-- start profile  -->
        <ProfileCard />
        <!-- End profile  -->
        <!-- Start resume -->
        <ResumeCard />
        <!-- End resume -->
        <!-- Start user information -->
        <InfoCard />
        <!-- End user information -->
        <!-- Start skills -->
        <SkillCard />
        <!-- End skills -->
        <!-- Start Language -->
        <LanguageCard />
      </div>
      <!-- End left side -->
      <!-- Start right side -->
      <div class="mt-4 space-y-5 sm:mt-0 lg:col-span-2">
        <!-- Start about me -->
        <AboutCard />
        <!-- End about me -->
        <RouterView />
      </div>
      <!-- End right side -->
    </div>
  </main>
</template>
