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
</template>
<script lang="ts">
import { Todo } from '@/types/todo/todo'
import { PropType } from '@vue/composition-api'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true
    }
  }
})
</script>
