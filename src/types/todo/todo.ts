export type Status = "未着手" | "着手中" | "完了"

export interface Todo {
  id: number,
  title: string,
  description: string,
  status: Status,
  deadline: Date,
  completionDate?: Date,
  createdAt: Date,
  updatedAt: Date
}