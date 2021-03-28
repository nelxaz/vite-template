import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'mainStore',
  state() {
    return {
      counter: 0,
    }
  },
  actions: {
    increment() {
      this.counter = this.counter + 1
    },
  },
})
