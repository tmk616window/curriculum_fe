import { useGetTodos, usePostTodo } from '@/api/generated/todoAppAPI'
import TodoList from '@/components/feature/todoList/todoList'
import { Button } from '@mui/material'

const TodoContent: React.FC = ({
}) => {
  const { data, error, isLoading } = useGetTodos({
    limit: 10,
    offset: 0
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const { mutate } = usePostTodo({})
  const reselt = mutate({ data: { title: 'test', description: '', labelIDs: [1], priorityID: 1, statusID: 1, } })

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => { reselt }}
      >
        追加
      </Button >
      <TodoList todoList={data || []} />
    </>
  )
}

export default TodoContent
