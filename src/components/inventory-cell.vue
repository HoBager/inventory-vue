<template>
  <div v-if="props.body === null" class="cell"></div>
  <div v-else class="cell">
    <img class="icon" :src="props.body.icon" />
    <div class="count">{{ props.body.count }}</div>
  </div>
</template>

<script setup lang="ts">
import type { InventoryCell } from '@/stores/inventory'
import { ref } from 'vue'

const props = defineProps<{ body: InventoryCell | null }>()
</script>

<style scoped lang="scss">
.cell {
  position: relative;
  height: 100px;
  width: 100px;
  border-top: 1px solid $primary;
  border-right: 1px solid $primary;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(5n) {
    border-right: unset;
  }
  &:nth-child(n + 1):nth-child(-n + 5) {
    border-top: unset;
  }
  .icon {
    width: 54px;
    height: 54px;
  }
  .count {
    position: absolute;
    color: $primaryWhite;
    font-size: 10px;
    font-weight: 500;
    opacity: 0.4;
    width: 16px;
    height: 16px;
    border: 1px solid $primary;
    border-right: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    right: 0;
    border-radius: 6px 0px 0px 0px;
  }
}
</style>
