<script setup lang="ts">
import { type Todo, todosStores } from '@/stores/todos'

const props = defineProps({
  todo: {
    type: Object as () => Todo,
    required: true
  }
})
const store = todosStores()

function changeCurrentTodoStatus(id: number) {
  store.changeTodoStatus(id)
}

</script>

<template>
  <div class="card">
    <input type="checkbox" :checked="props.todo?.completed" @change="changeCurrentTodoStatus(props.todo?.id)" />
    <span>{{ props.todo.title }}</span>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  height: 100px;
  border: 1px solid black;
  border-radius: 5px;
}
</style>