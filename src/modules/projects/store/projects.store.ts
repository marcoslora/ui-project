import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interface/project.interface';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';

// const initialLoad = (): Project[] => {
//   return [
//     {
//       id: uuidv4(),
//       name: 'Project 1',
//       tasks: [
//         { id: '1', name: 'Task 1' },
//         { id: '2', name: 'Task 2' },
//       ],
//     },
//     {
//       id: uuidv4(),
//       name: 'Project 2',
//       tasks: [
//         { id: '3', name: 'Task 3' },
//         { id: '4', name: 'Task 4' },
//       ],
//     },
//   ];
// };

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects', []));
  const addProject = (name: string) => {
    if (!name) return;
    projects.value.push({
      id: uuidv4(),
      name,
      tasks: [],
    });
  };

  return {
    // Properties
    // projects,
    // Getters o computed
    projectList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),
    // Actions
    addProject,
  };
});
