<template>
  <div class="inventory__body">
    <div class="inventory__table">
      <inventory-cell
        @open-item="openModal"
        @drop="onDrop"
        v-for="([position, item], key) of Object.entries(inventoryStore.inventory)"
        :body="item"
        :key="key"
        :position="position"
      />
    </div>
    <inventory-modal
      @delete-item="deleteItem"
      :data="modalValue"
      v-if="modalOpen"
      @close-modal="modalOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import { useInventory, type InventoryCell } from '@/stores/inventory'
import inventoryCell from './inventory-cell.vue'
import inventoryModal from './inventory-modal.vue'
import { ref } from 'vue'

const inventoryStore = useInventory()
const modalOpen = ref(false)
const modalValue = ref<{ item: InventoryCell; position: string } | undefined>(undefined)

function deleteItem(count: number | '', position: string) {
  inventoryStore.deleteItem(count, position)
}

function openModal(item: InventoryCell, position: string) {
  modalValue.value = { item, position }
  modalOpen.value = true
}

function onDrop(item: InventoryCell, cellNumber: number) {
  inventoryStore.dragCell(cellNumber, item)
}
</script>

<style scoped lang="scss">
.inventory__body {
  position: relative;
}
.inventory__table {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px 100px;
  border-radius: 12px;
  border: 1px solid $primary;
}
</style>
