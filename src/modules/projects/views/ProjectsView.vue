<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avances</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->

        <tr v-for="(project, index) in projectsStore.projectList" :key="project.id" class="hover">
          <th>{{ index + 1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.tasks.length }}</td>
          <td><progress class="progress progress-primary w-56" value="40" max="100"></progress></td>
        </tr>
      </tbody>
    </table>
  </div>
  <custom-modal :open="customModalOpen">
    <template #header>
      <h1 class="text-3xl">Header test</h1>
    </template>
    <template #body>
      <p>Parrafo de prueba para este componente</p>
    </template>
    <template #actions>
      <div class="flex justify-end">
        <button @click="customModalOpen = false" class="btn mr-4">Close</button>
        <button @click="customModalOpen = false" class="btn btn-primary">Open</button>
      </div>
    </template>
  </custom-modal>
  <fab-button @click="customModalOpen = true" position="bottom-left">
    <ModalIcon />
  </fab-button>
  <fab-button @click="modalOpen = true"> <AddCircle /> </fab-button>

  <input-modal
    :open="modalOpen"
    @close="modalOpen = false"
    @value="projectsStore.addProject"
    placeholder="Ingrese el nombre del proyecto"
    title="Nuevo Proyecto"
    subTitle="Ingrese el nombre del proyecto"
  />
</template>
<script lang="ts" setup>
import FabButton from '@/modules/common/components/FabButton.vue';
import AddCircle from '@/modules/common/icons/AddCircle.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import CustomModal from '@/modules/common/components/CustomModal.vue';
import { ref } from 'vue';
import ModalIcon from '@/modules/common/icons/ModalIcon.vue';
import { useProjectsStore } from '../store/projects.store';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const projectsStore = useProjectsStore();
</script>
