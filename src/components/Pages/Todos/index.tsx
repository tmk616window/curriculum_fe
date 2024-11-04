import { useGetSearch, useGetTodos } from '@/api/generated/todoAppAPI'
import { getTodosQueryParams } from '@/api/generated/zod/todoAppAPI'
import { TodoCreateDialog } from '@/components/feature/todoCreate/TodoCreateDialog'
import TodoList from '@/components/feature/todoList/todoList'
import { useState } from 'react'
import { TypeOf } from 'zod'
import TodoSearch from './todoSerach/todoSerach'
import { Stack } from '@mui/material'

const TodoContent: React.FC = ({
}) => {
  const [search, setSearch] = useState<TypeOf<typeof getTodosQueryParams>>({
    limit: 5,
    offset: 0,
  })
  const { data: sdata, error: serror, isLoading: sIsLoading } = useGetSearch()
  const { data, error, isLoading, queryKey } = useGetTodos(search)

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
    <Stack sx={{ m: 4 }}>
      <TodoSearch
        labels={sdata?.labels || []}
        priorities={sdata?.priorities || []}
        status={sdata?.status || []}
        queryKey={queryKey}
        setSearch={setSearch}
      />
      <TodoCreateDialog
        labels={sdata?.labels || []}
        priorities={sdata?.priorities || []}
        status={sdata?.status || []}
        queryKey={queryKey}
      />
      <TodoList todoList={data || []} />
    </Stack>
  )
}

export default TodoContent
