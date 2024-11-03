/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Todo App API
 * An API for managing todo items.
 * OpenAPI spec version: 1.0.0
 */
import {
  z as zod
} from 'zod'

/**
 * @summary Get all todo items
 */
export const getTodosQueryOffsetMin = 0;


export const getTodosQueryParams = zod.object({
  "limit": zod.number().min(1).optional(),
  "offset": zod.number().min(getTodosQueryOffsetMin).optional(),
  "labelIDs": zod.array(zod.number()).optional(),
  "whereTodoInput": zod.object({
  "title": zod.string().optional(),
  "description": zod.string().optional(),
  "priorityID": zod.number().optional(),
  "statusID": zod.number().optional()
}).optional()
})

export const getTodosResponseItem = zod.object({
  "id": zod.number(),
  "title": zod.string(),
  "description": zod.string().optional(),
  "createdAt": zod.string().datetime(),
  "labels": zod.array(zod.object({
  "id": zod.number(),
  "value": zod.string()
})).optional(),
  "finishedAt": zod.string().datetime().optional(),
  "priority": zod.object({
  "id": zod.number(),
  "name": zod.string()
}),
  "status": zod.object({
  "id": zod.number(),
  "value": zod.string()
})
})
export const getTodosResponse = zod.array(getTodosResponseItem)


/**
 * @summary Search for todo items
 */
export const getSearchResponse = zod.object({
  "labels": zod.array(zod.object({
  "id": zod.number(),
  "value": zod.string()
})),
  "priorities": zod.array(zod.object({
  "id": zod.number(),
  "name": zod.string()
})),
  "status": zod.array(zod.object({
  "id": zod.number(),
  "value": zod.string()
}))
})


/**
 * @summary Create a new todo item
 */
export const postTodoBody = zod.object({
  "title": zod.string(),
  "description": zod.string(),
  "labelIDs": zod.array(zod.number()),
  "priorityID": zod.number(),
  "statusID": zod.number()
})


