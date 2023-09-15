<template>
  <div class="cell"></div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.cell {
  height: 100px;
  width: 100px;
  border-top: 1px solid $primary;
  border-right: 1px solid $primary;

  &:nth-child(5n) {
    border-right: unset;
  }
  &:nth-child(n + 1):nth-child(-n + 5) {
    border-top: unset;
  }
}
</style>
