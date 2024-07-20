import router from '../../../router/index';
<template>
  <div class="fle flex-col">
    <!-- Top Menu -->
    <TopMenu />
    <main>
      <!-- Side Menu -->
      <router-view />
    </main>
  </div>
</template>
<script lang="ts" setup>
import TopMenu from '@/modules/common/components/TopMenu.vue';
</script>
