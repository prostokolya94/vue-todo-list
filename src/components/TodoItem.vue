<script setup lang="ts">

import type { Todo } from '@/stores/todos'

const props = defineProps({
  todo: {
    type: Object as () => Todo,
    required: true
  }
})

</script>

<template>
  <div>
    <input type="checkbox" />
    <span>{{props.todo.title}}</span>
  </div>
</template>

<style scoped>

</style>