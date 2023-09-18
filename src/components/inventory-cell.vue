<template>
  <div
    @drop="onDrop($event, props.position)"
    v-if="props.body === null"
    class="cell"
    @dragenter.prevent
    @dragover.prevent
    draggable="false"
    @dragend="dragend"
  ></div>
  <div
    @click="openItem"
    @dragstart="onDragStart($event, props.body)"
    @dragend="dragend"
    draggable="true"
    v-else
    class="cell"
  >
    <img class="icon" :src="props.body.icon" />
    <div class="count">{{ props.body.count }}</div>
  </div>
</template>

<script setup lang="ts">
import type { InventoryCell } from '@/stores/inventory'

const props = defineProps<{ body: InventoryCell | null; position: string }>()
const emit = defineEmits<{
  (e: 'drop', item: InventoryCell, position: string): void
  (e: 'openItem', item: InventoryCell, position: string): void
}>()

function openItem() {
  emit('openItem', props.body as InventoryCell, props.position)
}

function onDragStart(event: DragEvent, item: InventoryCell) {
  const ghost = document.createElement('div')
  const ghostIcon = document.createElement('img')
  ghost.append(ghostIcon)
  ghostIcon.src = props.body?.icon || ''
  ghost.classList.add('ghost')

  event.dataTransfer?.setData('item', JSON.stringify({ body: item, itemPosition: props.position }))
  event.dataTransfer!.dropEffect = 'move'
  event.dataTransfer!.effectAllowed = 'move'
  document.body.append(ghost)
  event.dataTransfer!.setDragImage(ghost, 50, 50)
}

function dragend() {
  document.querySelector('.ghost')?.remove()
}

function onDrop(event: DragEvent, cellNumber: string) {
  const item = event.dataTransfer!.getData('item')

  try {
    const cell = JSON.parse(item)
    emit('drop', cell, cellNumber)
  } catch {
    return
  }
}
</script>

<style lang="scss">
.ghost {
  position: absolute;
  top: 0;
  left: -100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 24px;
  background-color: $secondary;
  border: 1px solid $primary;
  opacity: 1;
}

.ghost__active {
  opacity: 1;
}

.cell {
  cursor: pointer;
  position: relative;
  height: 100px;
  width: 100px;
  border-top: 1px solid $primary;
  border-right: 1px solid $primary;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $secondary;

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
.cell:hover {
  background-color: #2f2f2f;
}
</style>
