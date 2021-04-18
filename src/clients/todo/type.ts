import { Params, Status, Todo } from "@/types/todo/todo";
import { TodoClientInterface } from ".";

export const TodoClient: TodoClientInterface = {
  getAll() {
    return Promise.resolve(
      Object.keys(localStorage)
        .filter((key) => !isNaN(Number(key)))
        .map((key) => {
          const todo = JSON.parse(localStorage.getItem(key) as string) as Todo
          todo.createdAt = new Date(todo.createdAt)
          todo.updatedAt = new Date(todo.updatedAt)
          return todo
        })
    )
  },

  get(id: number) {
    const item = localStorage.getItem(String(id))
    if (item === null) {
      return Promise.reject(new Error(`id: ${id} is not found`))
    }

    return Promise.resolve(JSON.parse(item) as Todo)
  },

  create(params: Params) {
    const todo: Todo = initializeTodo(params)
    localStorage.setItem(String(todo.id), JSON.stringify(todo))
    return Promise.resolve(todo)
  },

  update(id: number, todo: Todo) {
    localStorage.removeItem(String(id))
    todo.completionDate = checkCompletionDate(todo.status)
    todo.updatedAt = new Date()
    localStorage.setItem(String(id), JSON.stringify(todo))
    return Promise.resolve(todo)
  },

  delete(id: number) {
    localStorage.removeItem(String(id))
    return Promise.resolve()
  }
}

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

const checkCompletionDate = (status: Status) => {
  if (status === "完了") {
    return new Date()
  }
  return undefined
}