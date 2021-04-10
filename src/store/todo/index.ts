import { Todo } from '@/types/todo/todo'

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