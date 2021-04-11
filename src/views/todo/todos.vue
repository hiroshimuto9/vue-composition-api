<template>
  <h1>Todo一覧</h1>
  <ul>
    <!-- TODO: コンポーネント化 -->
    <li v-for="todo in todoStore.state.todos" :key="todo.id">
      {{ todo.title }}
      {{ todo.description }}
      {{ todo.status }}
      {{ todo.deadline }}
      {{ todo.completionDate }}
      {{ todo.createdAt }}
      {{ todo.updatedAt }}
    </li>
  </ul>
</template>
<script lang="ts">
import { todoKey } from '@/store/todo'
import { defineComponent, inject } from 'vue'

export default defineComponent({
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

