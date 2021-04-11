<template>
  <h1>Todo一覧</h1>
  <ul>
    <li v-for="todo in todoStore.state.todos" :key="todo.id">
      <TodoItem :todo="todo" />
    </li>
  </ul>
  <router-link to="/todos/new">新規作成</router-link>
</template>
<script lang="ts">
import { todoKey } from '@/store/todo'
import { defineComponent, inject } from 'vue'
import TodoItem from '@/components/todo/todoItem.vue'

export default defineComponent({
  components: {
    TodoItem
  },
  setup() {
    const todoStore = inject(todoKey)
    // 不正なkeyや当コンポーネントより上位階層でprovideされていない場合、
    // undefinedが返ってくるため型ガードを実装
    if (!todoStore) {
      throw new Error('todoStore is not provided')
    }
    return {
      todoStore
    }
  },
})
</script>

