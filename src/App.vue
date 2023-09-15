<template>
  <main>
    <div class="page">
      <div class="inventory">
        <v-info />
        <inventory-body />
      </div>
      <notification-window />
    </div>
  </main>
</template>

<script setup lang="ts">
import InventoryBody from './components/inventory-body.vue'
import NotificationWindow from './components/notification-window.vue'
import vInfo from './components/v-info.vue'
</script>

<style scoped lang="scss">
main {
  display: flex;
  justify-content: center;
}
.page {
  display: flex;
  flex-direction: column;
}
.inventory {
  display: flex;
  gap: 24px;
}
</style>
