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
  addTodo: (todo: Params) => void
  deleteTodo: (id: number) => void
  getTodo: (id: number) => Todo
}

export type Params = Pick<Todo, "title" | "description" | "deadline" >