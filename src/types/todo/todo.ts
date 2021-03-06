import { DeepReadonly } from 'vue'

export type Status = "未着手" | "着手中" | "完了"

export interface Todo {
  id: number,
  title: string,
  description: string,
  status: Status,
  deadline?: Date,
  completionDate?: Date,
  createdAt: Date,
  updatedAt: Date
}

export interface TodoState {
  todos: Todo[]
}

export interface TodoStore {
  state: DeepReadonly<TodoState>
  fetchTodos: () => void
  fetchTodo: (id: number) => void
  getTodo: (id: number) => Todo
  addTodo: (todo: Params) => void
  updateTodo: (id: number, todo: Todo) => void
  deleteTodo: (id: number) => void
}

export type Params = Pick<Todo, "title" | "description" | "deadline" >