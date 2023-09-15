<template>
  <div class="info">
    <img :src="infoImage" />
    <text-skeleton :height="'30px'" :width="'211px'" :radius="'8px'" />
    <div class="text">
      <text-skeleton :height="'10px'" :width="'180px'" :radius="'4px'" />
      <text-skeleton :height="'10px'" :width="'200px'" :radius="'4px'" />
      <text-skeleton :height="'10px'" :width="'190px'" :radius="'4px'" />
      <text-skeleton :height="'10px'" :width="'180px'" :radius="'4px'" />
      <text-skeleton :height="'10px'" :width="'160px'" :radius="'4px'" />
      <text-skeleton :height="'10px'" :width="'100px'" :radius="'4px'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import infoImage from '@/assets/info-image.png'
import textSkeleton from '@/components/text-skeleton.vue'
</script>

<style scoped lang="scss">
.info {
  width: 236px;
  height: 500px;
  border-radius: 12px;
  border: 1px solid $primary;
  padding: 18px 14px 24px 14px;
  display: flex;
  background-color: $secondary;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.text :last-child {
  margin-top: 10px;
}
</style>
