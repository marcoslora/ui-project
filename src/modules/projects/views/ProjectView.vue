<template>
  <div class="w-full">
    <section><bread-crumbs :name="project?.name ?? 'no name'" /></section>
  </div>
  <section></section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectsStore } from '../store/projects.store';
import type { Project } from '../interface/project.interface';

interface Props {
  id: string;
}
const router = useRouter();
const props = defineProps<Props>();
const projectStore = useProjectsStore();
const project = ref<Project | null>();
watch(
  () => props.id,
  () => {
    project.value = projectStore.projectList.find((project) => project.id === props.id);
    if (!project.value) {
      router.replace('/');
    }
  },
  { immediate: true },
);
</script>
