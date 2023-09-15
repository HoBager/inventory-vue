<template>
  <div class="skeleton"></div>
</template>

<script setup lang="ts">
const props = defineProps<{ width: string; height: string; radius: string }>()
</script>

<style scoped lang="scss">
.skeleton {
  width: v-bind(width);
  height: v-bind(height);
  border-radius: v-bind(radius);
  background-color: #333333;
  background-image: linear-gradient(to right, #333333 0%, #555555 10%, #333333 20%, #333333 100%);
  background-size: 200% 100%;
  animation: bgAnimate 1.5s linear(0 0%, 1.25 41.99%) infinite;
}

@keyframes bgAnimate {
  0% {
    background-position: 50% 0;
  }
  100% {
    background-color: -150% 0;
  }
}
</style>
