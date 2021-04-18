<template>
  <h1>Todo一覧</h1>
  <Suspense>
    <template #default>
      <AsyncTodos />
    </template>
    <template #fallback>
      <span>Loading...</span>
    </template>
  </Suspense>
  <button @click="create">
    新規作成
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import AsyncTodos from '@/components/todo/asyncTodos.vue'
import router from '@/router'

export default defineComponent({
  components: {
    AsyncTodos
  },
  setup() {
    const create = () => {
      router.push('/todos/new')
    }

    return {
      create,
    }
  },
})
</script>

