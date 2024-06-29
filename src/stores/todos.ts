import { ref } from 'vue'
import { defineStore } from 'pinia'

 export type Todo = {
  userId:number;
  id: number;
  title: string;
  completed: boolean;
}

export const todosStores = defineStore('todos', () => {
  const todos = ref<Todo[]>([])

  function addTodo(title: string) {
    todos.value.push({
      id: todos.value.length + 1,
      title: title,
      userId:1,
      completed: false
    })
  }

  function removeTodo(deletingId: number) {
    todos.value.filter((todo) => todo.id !== deletingId)
  }

  function changeTodoStatus(changingId: number) {
    const changingTodo = todos.value.find((el) => el.id === changingId)
    if (changingTodo) {
      changingTodo.completed = !changingTodo.completed
    }
  }

  function setTodos(setedTodos: Todo[]) {
    todos.value.slice(0)
    setedTodos.forEach((el) => {
      todos.value.push(el)
    })
  }

  return { todos, addTodo, removeTodo, changeTodoStatus, setTodos }
})
