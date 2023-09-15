<template>
  <div class="inventory__body">
    <inventory-cell
      v-for="(item, key) of Object.values(inventoryStore.inventory)"
      :body="item"
      :key="key"
    />
  </div>
</template>

<script setup lang="ts">
import { useInventory } from '@/stores/inventory'
import inventoryCell from './inventory-cell.vue'
const inventoryStore = useInventory()
</script>

<style scoped lang="scss">
.inventory__body {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px 100px;
  border-radius: 12px;
  border: 1px solid $primary;
}
</style>
