/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Todo App API
 * An API for managing todo items.
 * OpenAPI spec version: 1.0.0
 */
export type GetTodosParams = {
/**
 * The number of items to return
 */
limit?: number;
/**
 * The number of items to skip before starting to collect the result set
 */
offset?: number;
};

export interface ErrorResponse {
  error: string;
}

export interface CreateTodoInput {
  description?: string;
  labelIDs?: number[];
  priorityID?: number;
  statusID?: number;
  title?: string;
}

export interface Label {
  id: number;
  value: string;
}

export interface Status {
  id: number;
  value: string;
}

export interface Priority {
  id: number;
  name: string;
}

export interface Todo {
  createdAt: string;
  description?: string;
  finishedAt?: string;
  id: number;
  labels?: Label[];
  priority: Priority;
  status: Status;
  title: string;
}

