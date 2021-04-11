<template>
  <h1>新規Todo作成</h1>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="title">タイトル</label>
      <input type="text" v-model="data.title" />
    </div>
    <div>
      <label for="title">説明</label>
      <textarea v-model="data.description" />
    </div>
    <div>
      <label for="title">締切日</label>
      <input type="date" v-model="data.deadline" />
    </div>
    <button type="submit">作成する</button>
  </form>
</template>
<script lang="ts">
import { todoKey } from '@/store/todo'
import { Params } from '@/types/todo/todo'
import { defineComponent, inject, reactive } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const todoStore = inject(todoKey)
    if (!todoStore) {
      throw new Error('todoStore is not provided')
    }
    const router = useRouter()

    const data = reactive<Params>({
      title: '',
      description: '',
      deadline: undefined
    })

    const onSubmit = () => {
      const { title, description, deadline } = data
      todoStore.addTodo({
        title,
        description,
        deadline
      })
      router.push("/todos")
    }

    return {
      data,
      onSubmit
    }

  },
})
</script>
