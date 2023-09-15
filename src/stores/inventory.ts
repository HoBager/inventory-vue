import { defineStore } from 'pinia'
import { ref } from 'vue'

const inventoryMock: Inventory = {
  1: { count: 4, icon: 'item-image1.svg', id: 1 },
  2: { count: 2, icon: 'item-image2.svg', id: 2 },
  3: { count: 5, icon: 'item-image3.svg', id: 3 },
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: null,
  10: null,
  11: null,
  12: null,
  13: null,
  14: null,
  15: null,
  16: null,
  17: null,
  18: null,
  19: null,
  20: null,
  21: null,
  22: null,
  23: null,
  24: null,
  25: null
}
export interface InventoryCell {
  count: number
  icon: string
  id: number
}

export interface Inventory {
  [key: number]: InventoryCell | null
}

export const useInventory = defineStore('inventory', () => {
  const inventory = ref<Inventory>(inventoryMock)
  return { inventory }
})
