import { defineStore } from 'pinia'

const mockData: InventoryCell[] = []

export interface InventoryCell {
  count: number
  icon: string
  id: number
  position: number
}

export interface Inventory {
  [key: number]: InventoryCell | null
}

export const useInventory = defineStore('inventory', () => {
  const inventory = ref<inv>()
})
