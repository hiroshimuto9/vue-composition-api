import { TodoClientInterface } from "./todo";
import { TodoClient } from "./todo/type";

export const TODOS = 'todos'

export interface Repository {
  [TODOS]: TodoClientInterface
}

export default {
  [TODOS]: TodoClient
} as Repository