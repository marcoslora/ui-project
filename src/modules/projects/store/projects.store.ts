import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project, Task } from '../interface/project.interface';
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
  const addTaskToProject = (projectId: string, taskName: string) => {
    if (taskName.trim().length === 0) return;
    const project = projects.value.find((p) => p.id === projectId);
    if (!project) return;
    project.tasks.push({
      id: uuidv4(),
      name: taskName,
      // completeAt: new Date(),
    });
  };
  const toggleTask = (projectId: string, taskId: string) => {
    const project = projects.value.find((p) => p.id === projectId);
    if (!project) return;
    const task = project.tasks.find((t) => t.id === taskId);
    if (!task) return;
    task.completedAt = task.completedAt ? undefined : new Date();
  };

  return {
    // Properties
    // projects,
    // Getters o computed
    projectList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),
    projectsWithCompletion: computed(() => {
      return projects.value.map((project) => {
        const total = project.tasks.length;
        const completed = project.tasks.filter((t) => t.completedAt).length;
        const completion = total === 0 ? 0 : (completed / total) * 100;

        return {
          id: project.id,
          name: project.name,
          taskCount: total,
          completion: Math.round(completion),
        };
      });
    }),
    // Actions
    addProject,
    addTaskToProject,
    toggleTask,
  };
});
