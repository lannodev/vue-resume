<template>
  <component :is="icon" />
</template>

<script setup lang="ts">
import * as solid from '@heroicons/vue/24/solid';
import * as outline from '@heroicons/vue/24/outline';
import { computed } from 'vue';

const props = defineProps(['icon', 'isSolid']);

const icon = computed(() => {
  if (props.isSolid) return solid[props.icon as keyof typeof solid];
  return outline[props.icon as keyof typeof outline];
});
</script>
