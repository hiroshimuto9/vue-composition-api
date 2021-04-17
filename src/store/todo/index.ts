import { InjectionKey, reactive, readonly } from 'vue'
import { Todo, TodoStore, TodoState, Params } from '@/types/todo/todo'

const mockTodo: Todo[] = [
  {
    id: 1,
    title: 'Todo1',
    description: '1つ目のtodo',
    status: "未着手",
    deadline: new Date('2021-4-21'),
    completionDate: undefined,
    createdAt: new Date('2021-04-01'),
    updatedAt: new Date('2021-04-01'),
  },
  {
    id: 2,
    title: 'Todo2',
    description: '2つ目のtodo',
    status: "未着手",
    deadline: new Date('2021-4-22'),
    completionDate: undefined,
    createdAt: new Date('2021-04-02'),
    updatedAt: new Date('2021-04-02'),
  },
  {
    id: 3,
    title: 'Todo3',
    description: '3つ目のtodo',
    status: "未着手",
    deadline: new Date('2021-4-23'),
    completionDate: undefined,
    createdAt: new Date('2021-04-03'),
    updatedAt: new Date('2021-04-03'),
  },
]

const state = reactive<TodoState>({
  todos: mockTodo,
})

const initializeTodo = (todo: Params) => {
  const date = new Date();
  return {
    id: date.getTime(),
    title: todo.title,
    description: todo.description,
    status: "未着手",
    deadline: todo.deadline,
    completionDate: undefined,
    createdAt: date,
    updatedAt: date,
  } as Todo
}

const updateTodoData = (todo: Todo) => {
  const date = new Date();
  return {
    id: todo.id,
    title: todo.title,
    description: todo.description,
    status: todo.status,
    deadline: todo.deadline,
    completionDate: todo.completionDate ? todo.completionDate : undefined,
    createdAt: todo.createdAt,
    updatedAt: date,
  }
}

const addTodo = (todo: Params) => {
  state.todos.push(initializeTodo(todo))
}

const deleteTodo = (id: number) => {
  state.todos = state.todos.filter((todo) => todo.id !== id)
}

const getTodo = (id: number) => {
  const todo = state.todos.find((todo) => todo.id === id)
  if (!todo) {
    throw new Error(`ID：${id}のTodoは存在しません。`)
  }
  return todo
}

const updateTodo = (id: number, todo: Todo) => {
  const index = state.todos.findIndex((todo) => todo.id === id)
  console.log("indexは", index)
  if (index === -1) {
    throw new Error(`ID：${id}のTodoは存在しません。`)
  }
  const updateTodo = updateTodoData(todo)
  state.todos[index] = updateTodo
}

export const todoStore: TodoStore = {
  state: readonly(state),
  addTodo,
  deleteTodo,
  getTodo,
  updateTodo
}

export const todoKey: InjectionKey<TodoStore> = Symbol('todoKey')
