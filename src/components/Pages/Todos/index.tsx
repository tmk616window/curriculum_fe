import { useGetTodos } from '@/api/generated/todoAppAPI'
import { TodoCreateDialog } from '@/components/feature/todoCreate/TodoCreateDialog'
import TodoList from '@/components/feature/todoList/todoList'

const TodoContent: React.FC = ({
}) => {
  const { data, error, isLoading, queryKey } = useGetTodos({
    limit: 10,
    offset: 0,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <TodoCreateDialog
        labels={[
          {
            id: 1,
            value: 'label1'
          },
          {
            id: 2,
            value: 'label2'
          }
        ]}
        priorities={[
          {
            id: 1,
            name: 'priority1'
          },
          {
            id: 2,
            name: 'priority2'
          }
        ]}
        status={[
          {
            id: 1,
            value: 'status1'
          },
          {
            id: 2,
            value: 'status2'
          }
        ]}
        queryKey={queryKey}
      />
      <TodoList todoList={data || []} />
    </>
  )
}

export default TodoContent
