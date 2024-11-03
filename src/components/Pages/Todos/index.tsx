import { useGetSearch, useGetTodos } from '@/api/generated/todoAppAPI'
import { TodoCreateDialog } from '@/components/feature/todoCreate/TodoCreateDialog'
import TodoList from '@/components/feature/todoList/todoList'

const TodoContent: React.FC = ({
}) => {
  const { data: sdata, error: serror, isLoading: sIsLoading } = useGetSearch()
  const { data, error, isLoading, queryKey } = useGetTodos({
    limit: 10,
    offset: 0,
  })

  if (isLoading || sIsLoading) {
    return <div>Loading...</div>
  }

  if (serror) {
    return <div>Error: {serror.message}</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <TodoCreateDialog
        labels={sdata?.labels || []}
        priorities={sdata?.priorities || []}
        status={sdata?.status || []}
        queryKey={queryKey}
      />
      <TodoList todoList={data || []} />
    </>
  )
}

export default TodoContent
