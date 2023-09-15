<template>
  <main>
    <div class="inventory">
      <v-info />
      <inventory-body />
    </div>
  </main>
</template>

<script setup lang="ts">
import InventoryBody from './components/inventory-body.vue'
import vInfo from './components/v-info.vue'
</script>

<style scoped lang="scss">
.inventory {
  display: flex;
  gap: 24px;
}
</style>
