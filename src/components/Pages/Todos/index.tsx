import { useGetTodos } from '@/api/generated/todoAppAPI'
import TodoList from '@/components/feature/todoList/todoList'

const TodoContent: React.FC = ({
}) => {
  const { data, error, isLoading } = useGetTodos()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <TodoList todoList={data || []} />
  )
}

export default TodoContent
