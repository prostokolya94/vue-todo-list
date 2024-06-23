<template>
  <div class="about">
    <h1>This is todos page</h1>

    <TodoItem v-for="(todo, index) in store.todos" :key="index" :todo="todo" />
  </div>
</template>

<script>
import axios from 'axios'
import { onMounted } from 'vue'
import { todosStores } from '@/stores/todos.ts'
import TodoItem from '@/components/TodoItem.vue'

const store = todosStores()

export default {
  name: 'TodosView',
  components: { TodoItem },
  setup() {
    const fetchData = () => {
      axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => {
          store.setTodos(response.data)
        })
    }

    onMounted(fetchData)

    return { store }
  }
}

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
