<template>
  <div class="about">
    <h1>This is todos page</h1>
    <TodoItem v-for="(todo, index) in store.todos" :key="index" :todo="todo" />
  </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, watch } from 'vue'
import { todosStores } from '@/stores/todos.ts'
import TodoItem from '@/components/TodoItem.vue'

const store = todosStores()

const fetchData = () => {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then((response) => {
      store.setTodos(response.data)
    })
}

onMounted(fetchData)

</script>

<style>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}
</style>
