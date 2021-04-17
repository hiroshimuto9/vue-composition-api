<template>
  <h1>編集</h1>
  <div v-if="error">
    ID：{{ $route.params.id }}のTodoは存在しません。
  </div>
  <div v-else>
    <form @submit.prevent="onSubmit">
    <div>
      <label for="title">タイトル</label>
      <input type="text" v-model="data.title" />
    </div>
    <div>
      <label for="description">説明</label>
      <textarea v-model="data.description" />
    </div>
    <div>
      <label for="deadline">締切日</label>
      <input type="date" v-model="data.deadline" />
    </div>
    <div>
      <label for="status">ステータス</label>
      <select id="status" v-model="data.status">
        <option value="未着手">未着手</option>
        <option value="着手中">着手中</option>
        <option value="完了">完了</option>
      </select>
    </div>
    <div>
      <p>
        完了日 {{ data.completionDate ? data.completionDate : '----' }}
      </p>
    </div>
    <div>
      <p>作成日 {{ data.createdAt }}</p>
    </div>
    <div>
      <p>更新日 {{ data.updatedAt }}</p>
    </div>
    <button type="submit">更新する</button>
  </form>
  </div>
</template>
<script lang="ts">
import { todoKey } from '@/store/todo'
import { Todo } from '@/types/todo/todo'
import { defineComponent, inject, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const todoStore = inject(todoKey)
    if(!todoStore) {
      throw new Error('todoStore is not provided')
    }

    const router = useRouter()
    const route = useRoute()
    const id: number = Number(route.params.id)

    try {
      const todo = todoStore.getTodo(id)
      const data = reactive<Todo>({
        id: todo.id,
        title: todo.title,
        description: todo.description,
        deadline: todo.deadline,
        status: todo.status,
        completionDate: todo.completionDate,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt
      })

      const onSubmit = () => {
      const { title, description, deadline, status, completionDate, createdAt, updatedAt } = data
      todoStore.updateTodo(id, {
        id,
        title,
        description,
        deadline,
        status,
        completionDate,
        createdAt,
        updatedAt
      })
      router.push("/todos")
    }

      return {
        error: false,
        data,
        onSubmit
      }
    } catch (error) {
      console.error(error)
      return {
        error: true
      }
    }
  },
})
</script>
