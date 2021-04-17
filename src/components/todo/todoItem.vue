<template>
  <div>
    {{ todo.title }}
    {{ todo.description }}
    {{ todo.status }}
    {{ todo.deadline }}
    {{ todo.completionDate }}
    {{ todo.createdAt }}
    {{ todo.updatedAt }}
  </div>
  <div>
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
  emits: ['todoDelete'],
  setup(props, { emit }) {
    const todoDelete = () => {
      emit('todoDelete', props.todo.id)
    }
    return {
      todoDelete
    }
  }
})
</script>
