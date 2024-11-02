import { useGetTodos } from '@/api/generated/todoAppAPI'
import { TodoCreateDialog } from '@/components/feature/todoCreate/TodoCreateDialog'
import { useCreateTodo } from '@/components/feature/todoCreate/useCreateTodo'
import TodoList from '@/components/feature/todoList/todoList'
import { Button } from '@mui/material'
import { useCallback } from 'react'

const TodoContent: React.FC = ({
}) => {
  const { data, error, isLoading, refetch } = useGetTodos({
    limit: 10,
    offset: 0,
  })
  const { handleCreateTodo } = useCreateTodo()

  const handleCreate = useCallback(async () => {
    const isSuccess = await handleCreateTodo({
      title: 'test1112345',
      description: 'aaaa',
      labelIDs: [1],
      priorityID: 1,
      statusID: 1
    })

    if (isSuccess) {
      refetch()
    }
  }, [handleCreateTodo])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <TodoCreateDialog />
      <TodoList todoList={data || []} />
    </>
  )
}

export default TodoContent
