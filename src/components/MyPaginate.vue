<script setup lang="ts">
import { computed, defineEmits, ref } from 'vue';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/vue/20/solid';

const props = defineProps<{
  totalItems: number;
  itemsPerPage: number;
  maxVisibleButtons: number;
}>();

const currentPage = ref(1);
const emit = defineEmits(['pagechanged']);

/**
 * Methods
 */
function firstPage() {
  currentPage.value = 1;
  emit('pagechanged', 1);
}

function nextPage() {
  currentPage.value++;
  emit('pagechanged', currentPage.value);
}

function prevPage() {
  currentPage.value--;
  emit('pagechanged', currentPage.value);
}

function lastPage() {
  currentPage.value = lastPageCount.value;
  emit('pagechanged', currentPage.value);
}

function selectPage(page: number) {
  currentPage.value = page;
  emit('pagechanged', currentPage.value);
}

function isPageActive(page: number) {
  return currentPage.value === page;
}

/**
 * Computed
 */
const lastPageCount = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));

const visibleButtons = computed(() => {
  if (props.maxVisibleButtons > lastPageCount.value) {
    return lastPageCount.value;
  }
  return props.maxVisibleButtons;
});

const startPage = computed(() => {
  if (currentPage.value === 1) {
    return 1;
  }
  if (currentPage.value === lastPageCount.value) {
    return lastPageCount.value - visibleButtons.value + 1;
  }
  return currentPage.value - 1;
});

const endPage = computed(() => {
  return Math.min(startPage.value + visibleButtons.value - 1, props.totalItems);
});

const pages = computed(() => {
  const range = [];

  for (let i = startPage.value; i <= endPage.value; i += 1) {
    range.push({
      id: i,
      isDisabled: i === currentPage.value,
    });
  }

  return range;
});

const isInFirstPage = computed(() => currentPage.value === 1);

const isInLastPage = computed(() => currentPage.value === lastPageCount.value);

const firstItem = computed(() => {
  return (currentPage.value - 1) * props.itemsPerPage;
});

const lastItem = computed(() => {
  const last = firstItem.value + props.itemsPerPage;
  if (last <= props.totalItems) return last;
  return props.totalItems;
});
</script>

<template>
  <div class="flex items-center justify-between border-t border-dashed py-4 dark:border-night-600">
    <!-- Small screen -->
    <div class="flex flex-1 justify-between sm:hidden">
      <button :disabled="isInFirstPage" @click="prevPage()" class="arrow-button rounded-lg">
        <span class="sr-only">Previous</span>
        <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
        <span class="pr-2 text-xs"> {{ $t('paginate.previous_page') }} </span>
      </button>
      <button @click="nextPage()" :disabled="isInLastPage" class="arrow-button rounded-lg">
        <span class="sr-only">Next</span>
        <span class="pl-2 text-xs"> {{ $t('paginate.next_page') }} </span>
        <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
      </button>
    </div>

    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700 dark:text-night-300">
          {{ $t('paginate.count', { first: firstItem + 1, last: lastItem, total: totalItems }) }}
        </p>
      </div>
      <div>
        <nav class="isolate inline-flex gap-2 -space-x-px" aria-label="Pagination">
          <button :disabled="isInFirstPage" @click="firstPage()" class="arrow-button rounded-full">
            <span class="sr-only">{{ $t('paginate.first_page') }}</span>
            <ChevronDoubleLeftIcon class="h-5 w-5" aria-hidden="true" />
          </button>
          <button :disabled="isInFirstPage" @click="prevPage()" class="arrow-button rounded-lg">
            <span class="sr-only">{{ $t('paginate.previous_page') }}</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            v-for="(page, index) in pages"
            :key="index"
            class="button"
            type="button"
            @click="selectPage(page.id)"
            :disabled="page.isDisabled"
            :class="{ active: isPageActive(page.id) }"
            :aria-label="`Go to page number ${page.id}`">
            {{ page.id }}
          </button>

          <button @click="nextPage()" :disabled="isInLastPage" class="arrow-button rounded-lg">
            <span class="sr-only">{{ $t('paginate.next_page') }}</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </button>
          <button :disabled="isInLastPage" @click="lastPage()" class="arrow-button rounded-full">
            <span class="sr-only">{{ $t('paginate.last_page') }}</span>
            <ChevronDoubleRightIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<style>
.button {
  @apply inline-flex items-center rounded-md border border-gray-200 bg-white px-2.5 py-1 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-20 dark:border-night-600 dark:bg-night-800 dark:text-night-400 hover:dark:bg-night-600 dark:hover:text-night-300;
}
.arrow-button {
  @apply inline-flex items-center border border-gray-200 bg-white px-1 py-1 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-20 disabled:cursor-not-allowed disabled:text-gray-200 dark:border-night-600 dark:bg-night-800 dark:text-night-400 hover:dark:bg-primary-500/20 hover:dark:bg-night-600 dark:hover:text-night-300 dark:disabled:cursor-not-allowed dark:disabled:text-night-600 dark:disabled:hover:bg-night-800;
}
.active {
  @apply border-primary-500/30 bg-primary-500/20 text-primary-500 hover:bg-primary-500/20 hover:text-primary-500 dark:border-primary-500/30 dark:bg-primary-500/20 dark:text-primary-500 dark:hover:bg-primary-500/20 dark:hover:text-primary-500;
}
</style>
