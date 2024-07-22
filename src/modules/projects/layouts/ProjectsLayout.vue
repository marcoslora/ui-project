<template>
  <div class="fle flex-col">
    <!-- Top Menu -->
    <TopMenu />
    <main class="flex flex-row">
      <!-- Side Menu -->
      <SideMenu />
      <router-view />
    </main>
  </div>
</template>
<script lang="ts" setup>
import TopMenu from '@/modules/common/components/TopMenu.vue';
import SideMenu from '@/modules/projects/components/SideMenu.vue';
</script>
