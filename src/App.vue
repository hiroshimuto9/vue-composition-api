<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import {todoStore, todoKey} from '@/store/todo/index'

export default defineComponent({
  name: 'App',
  setup() {
    provide(todoKey, todoStore)
  },
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
