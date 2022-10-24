<script setup lang="ts">
import { computed, ref } from 'vue';
import ProjectCardItem from './ProjectCardItem.vue';
import { useResumeStore } from '@/stores/ResumeStore';
import { storeToRefs } from 'pinia';
import MyPaginate from './MyPaginate.vue';

const itemsPerPage = 3;
const currentPage = ref(1);
const resumeStore = useResumeStore();
const { resume } = storeToRefs(resumeStore);

const total = computed(() => {
  return resume.value.project.length;
});

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return resume.value.project.slice(start, end);
});

function onPageChange(page: number) {
  currentPage.value = page;
}
</script>
<template>
  <div class="card">
    <h2 class="mb-5 text-lg font-semibold dark:text-night-50">{{ $t('project') }}</h2>
    <!-- Project 1 -->
    <ProjectCardItem
      v-for="(item, index) of paginatedItems"
      :item="item"
      :key="index"
      :separator="paginatedItems.length > index + 1" />
    <!-- Paginate  -->
    <MyPaginate :totalItems="total" :itemsPerPage="itemsPerPage" :maxVisibleButtons="3" @pagechanged="onPageChange" />
  </div>
</template>
