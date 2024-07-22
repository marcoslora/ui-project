<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <!-- Header -->
      <div class="border-b border-blue-500">
        <slot name="header"> </slot>
      </div>
      <!-- Body -->
      <div class="my-5"><slot name="body" /></div>

      <!-- Footer -->
      <div class="border-t border-t-blue-500 pt-2">
        <slot name="actions" />
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
interface Props {
  open?: boolean;
}
withDefaults(defineProps<Props>(), {
  open: false,
});
</script>
