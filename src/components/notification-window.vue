<template>
  <div v-if="isOpen" class="notification">
    <text-skeleton width="700px" height="36px" radius="12px" />
    <button @click="isOpen = false" class="close"><close-icon /></button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import textSkeleton from './text-skeleton.vue'
import CloseIcon from '@/components/icon-close.vue'
const isOpen = ref<boolean>(true)
</script>

<style scoped lang="scss">
.notification {
  position: relative;
  max-width: 785px;
  height: 72px;
  padding: 18px;
  border-radius: 12px;
  border: 1px solid $primary;
  background: $secondary;
  margin-top: 24px;
  .close {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 4px;
    right: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: unset;
    border: none;
    cursor: pointer;
  }
}
</style>
