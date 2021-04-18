<template>
  <ul>
    <li v-for="todo in todoStore.state.todos" :key="todo.id">
      <TodoItem
        :todo="todo"
        @todoDelete="todoDelete"
        @todoEdit="todoEdit"
      />
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue'
import TodoItem from '@/components/todo/todoItem.vue'
import { todoKey } from '@/store/todo'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    TodoItem
  },
  async setup() {
    const todoStore = inject(todoKey)
    // 不正なkeyや当コンポーネントより上位階層でprovideされていない場合、
    // undefinedが返ってくるため型ガードを実装
    if (!todoStore) {
      throw new Error('todoStore is not provided')
    }

    const router = useRouter()
    const create = () => {
      router.push('/todos/new')
    }

    const todoDelete = (id: number) => {
      todoStore.deleteTodo(id)
    }

    const todoEdit = (id: number) => {
      router.push(`/todos/edit/${id}`)
    }

    await todoStore.fetchTodos()

    return {
      todoStore,
      create,
      todoDelete,
      todoEdit
    }
  },
})
</script>
