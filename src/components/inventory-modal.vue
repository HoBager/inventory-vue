<template>
  <div class="modal">
    <button class="close" @click="emit('closeModal')"><img src="carbon-close.svg" /></button>
    <img class="icon" :src="props.item?.icon" />
    <hr />
    <div class="text">
      <text-skeleton class="name" :width="'211px'" :height="'30px'" radius="8px" />
      <text-skeleton :width="'211px'" :height="'10px'" radius="8px" />
      <text-skeleton :width="'211px'" :height="'10px'" radius="8px" />
      <text-skeleton :width="'211px'" :height="'10px'" radius="8px" />
      <text-skeleton :width="'180px'" :height="'10px'" radius="8px" />
      <text-skeleton :width="'80px'" :height="'10px'" radius="8px" />
    </div>
    <hr />
    <div class="delete">
      <button @click="confirm = true">Удалить предмет</button>
    </div>
    <div class="confirm" v-if="confirm">
      <input v-model="deleteCount" type="number" placeholder="введите количество" />
      <div class="confirm__buttons">
        <button @click="confirm = false" class="cansel">Отмена</button
        ><button class="apply">Подтвердить</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InventoryCell } from '@/stores/inventory'
import TextSkeleton from './text-skeleton.vue'
import { ref } from 'vue'

const emit = defineEmits<{ (e: 'closeModal'): void; (e: 'deleteItem', count: number): void }>()
const props = defineProps<{ item?: InventoryCell }>()
const deleteCount = ref<number>(0)
const confirm = ref<boolean>(false)
</script>

<style scoped lang="scss">
.modal {
  width: 250px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid $primary;
  border-radius: 0 12px 12px 0;
  position: absolute;
  top: 1px;
  right: 1px;
  background: rgba(38, 38, 38, 0.835);
  padding: 55px 15px 18px;

  .close {
    background-color: unset;
    border: unset;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
  .icon {
    width: 130px;
    height: 130px;
  }

  hr {
    border: unset;
    border-top: 1px solid $primary;
    margin-top: 24px;
    width: 100%;
  }

  .text {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    .name {
      margin-bottom: 8px;
    }
  }

  .delete {
    margin-top: 18px;
    button {
      cursor: pointer;
      width: 220px;
      height: 39px;
      border-radius: 8px;
      background-color: #fa7272;
      color: $primaryWhite;
      border: unset;
    }
  }

  .confirm {
    border-top: 1px solid $primary;
    background-color: $secondary;
    width: 249px;
    height: 133px;
    padding: 20px;

    background: rgb(38, 38, 38);
    border-radius: 0 0 12px 0;
    position: absolute;
    bottom: 0;

    input {
      width: 210px;
      height: 40px;
      outline: none;
      border-radius: 4px;
      border: 1px solid $primary;
      background: $secondary;
      padding-left: 12px;
      color: $primaryWhite;
    }

    .confirm__buttons {
      margin-top: 20px;
      gap: 10px;
      display: flex;
    }
    .confirm__buttons button {
      display: flex;
      width: 88px;
      cursor: pointer;
      font-weight: 500;
      padding: 8px 28px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      box-shadow: 0 0 20px 0px #fa7272ac;
      border: unset;
    }

    .confirm__buttons .apply {
      background-color: #fa7272;
      color: $primaryWhite;
      width: 112px;
    }

    .confirm__buttons .cansel {
      background-color: $primaryWhite;
    }
  }
}
</style>
