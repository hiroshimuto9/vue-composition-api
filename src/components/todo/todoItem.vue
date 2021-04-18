<template>
  <div>
    <p>タイトル：{{ todo.title }}</p>
    <p>説明：{{ todo.description }}</p>
    <p>ステータス：{{ todo.status }}</p>
    <p>締切日：{{ todo.deadline }}</p>
    <p>完了日：{{ todo.completionDate }}</p>
    <p>作成日：{{ todo.createdAt }}</p>
    <p>更新日：{{ todo.updatedAt }}</p>
  </div>
  <div>
    <button @click="todoEdit">編集</button>
    <button @click="todoDelete">削除</button>
  </div>
</template>
<script lang="ts">
import { Todo } from '@/types/todo/todo'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true
    }
  },
  emits: ['todoDelete', 'todoEdit'],
  setup(props, { emit }) {
    const todoDelete = () => {
      emit('todoDelete', props.todo.id)
    }

    const todoEdit = () => {
      emit('todoEdit', props.todo.id)
    }

    return {
      todoDelete,
      todoEdit
    }
  }
})
</script>
