import { useGetTodos } from '@/api/generated/todoAppAPI'
import { useCreateTodo } from '@/components/feature/todoCreate/useCreateTodo'
import TodoList from '@/components/feature/todoList/todoList'
import { Button } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'

const TodoContent: React.FC = ({
}) => {
  const { data, error, isLoading, refetch, queryKey } = useGetTodos({
    limit: 10,
    offset: 0,
  })
  const { handleCreateTodo } = useCreateTodo(queryKey, data)
  const queryClient = useQueryClient();
  const todos = queryClient.getQueryData(queryKey)

  const handleCreate = useCallback(async () => {
    const isSuccess = await handleCreateTodo({
      title: 'test1112345',
      description: 'aaaa',
      labelIDs: [1],
      priorityID: 1,
      statusID: 1
    })

    if (isSuccess) {
      console.log(
      )
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
      <Button
        variant="contained"
        color="primary"
        onClick={handleCreate}
      >
        追加
      </Button >
      <TodoList todoList={data || []} />
    </>
  )
}

export default TodoContent
