<template>
  <div class="inventory__body">
    <inventory-cell
      @click=""
      @drop="onDrop"
      v-for="([position, item], key) of Object.entries(inventoryStore.inventory)"
      :body="item"
      :key="key"
      :position="position"
    />
  </div>
</template>

<script setup lang="ts">
import { useInventory, type InventoryCell } from '@/stores/inventory'
import inventoryCell from './inventory-cell.vue'
const inventoryStore = useInventory()

function onDrop(item: InventoryCell, cellNumber: number) {
  inventoryStore.dragCell(cellNumber, item)
}
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
