<template>
  <div>Home route</div>
  <div>{{ store.counter }}</div>
  <button @click="store.increment">increment</button>
</template>
<script setup>
  import { useStore } from '@/store/store.js'

  const store = useStore()
</script>
