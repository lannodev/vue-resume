import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => {
    return {
      darkMode: false,
    };
  },
  getters: {},
  actions: {
    toggleTheme() {
      localStorage.theme = this.darkMode ? 'dark' : 'light';
      this.loadTheme();
    },
    loadTheme() {
      this.darkMode = localStorage.theme === 'dark' || !('theme' in localStorage);
      if (this.darkMode || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
  },
});
