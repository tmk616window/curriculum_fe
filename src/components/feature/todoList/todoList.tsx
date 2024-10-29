import { Todo } from '@/api/generated/todoAppAPI.schemas'
import { Stack } from '@mui/material'

type TodoListProps = {
  todoList: Todo[]
}

const TodoList: React.FC<TodoListProps> = ({
  todoList
}) => {
  return (
    <Stack>
      {todoList.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </Stack>
  )
}

export default TodoList
