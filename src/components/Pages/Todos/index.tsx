import { useGetSearch, useGetTodos } from '@/api/generated/todoAppAPI'
import { getTodosQueryParams } from '@/api/generated/zod/todoAppAPI'
import { TodoCreateDialog } from '@/components/feature/todoCreate/TodoCreateDialog'
import TodoList from '@/components/feature/todoList/todoList'
import { useEffect, useState } from 'react'
import { TypeOf } from 'zod'
import TodoSearch from './todoSerach/todoSerach'
import { Stack } from '@mui/material'
import { useRouter } from 'next/router'

const TodoContent: React.FC = ({
}) => {
  const router = useRouter()
  const { query } = router
  const [search, setSearch] = useState<TypeOf<typeof getTodosQueryParams>>({
    offset: 0,
    limit: 10,
  })
  const { data: sdata, error: serror, isLoading: sIsLoading } = useGetSearch()
  const { data, error, isLoading, queryKey, refetch } = useGetTodos(search)

  useEffect(() => {
    if (!router.isReady) return;
    setSearch({
      offset: query.offset ? Number(query.offset) : 0,
      limit: query.limit ? Number(query.limit) : 10,
      title: query.title ? String(query.title) : undefined,
      description: query.description ? String(query.description) : undefined,
      priorityID: query.priorityID ? Number(query.priorityID) : undefined,
      statusID: query.statusID ? Number(query.statusID) : undefined,
      labelIDs: query.labelIDs ? String(query.labelIDs).split(',').map(Number) : undefined,
    })
    refetch()
  }, [query, router]);

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
      />
      <TodoCreateDialog
        labels={sdata?.labels || []}
        priorities={sdata?.priorities || []}
        status={sdata?.status || []}
        queryKey={queryKey}
      />
      <TodoList
        todoList={data?.todoList || []}
        pageCount={data?.pageCount || 0}
        search={search}
      />
    </Stack>
  )
}

export default TodoContent
