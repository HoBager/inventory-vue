<template>
  <div class="inventory__body">
    <inventory-cell /><inventory-cell /><inventory-cell /><inventory-cell /><inventory-cell />
    <inventory-cell /><inventory-cell /><inventory-cell /><inventory-cell /><inventory-cell />
    <inventory-cell /><inventory-cell /><inventory-cell /><inventory-cell /><inventory-cell />
    <inventory-cell /><inventory-cell /><inventory-cell /><inventory-cell /><inventory-cell />
    <inventory-cell /><inventory-cell /><inventory-cell /><inventory-cell /><inventory-cell />
  </div>
</template>

<script setup lang="ts">
import inventoryCell from './inventory-cell.vue'
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
