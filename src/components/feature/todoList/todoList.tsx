import { Todo } from '@/api/generated/todoAppAPI.schemas'
import { postTodoBody } from '@/api/generated/zod/todoAppAPI'
import { MultiSelectAutocomplete } from '@/components/common/MultiSelectAutocomplete'
import { useForm } from '@/hooks/useForm'
import { Stack } from '@mui/material'

type TodoListProps = {
  todoList: Todo[]
}

const TodoList: React.FC<TodoListProps> = ({
  todoList
}) => {

  return (
    <Stack>
      <MultiSelectAutocomplete />
      {todoList.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </Stack>
  )
}

export default TodoList
