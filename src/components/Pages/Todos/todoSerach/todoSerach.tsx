
import { Label, Priority, Status, Todo } from '@/api/generated/todoAppAPI.schemas'
import { getTodosQueryParams } from '@/api/generated/zod/todoAppAPI'
import { MultiSelectAutocomplete } from '@/components/common/MultiSelectAutocomplete'
import { Select } from '@/components/common/Select/Select'
import { TextField } from '@/components/common/TextField'
import { useForm } from '@/hooks/useForm'
import { Button, MenuItem, Stack } from '@mui/material'
import { QueryKey, useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { TypeOf } from 'zod'

type TodoSearchProps = {
  labels: Label[]
  priorities: Priority[]
  status: Status[]
  queryKey: QueryKey
  setSearch: (search: TypeOf<typeof getTodosQueryParams>) => void
}

const TodoSearch: React.FC<TodoSearchProps> = ({
  labels,
  priorities,
  status,
  queryKey,
  setSearch
}) => {
  const queryClient = useQueryClient()
  const { control, reset, handleSubmit } = useForm(getTodosQueryParams)

  const handleSearch = useCallback<SubmitHandler<TypeOf<typeof getTodosQueryParams>>>(async (formData) => {
    setSearch(formData)
    queryClient.invalidateQueries({ queryKey })
    reset()
  }, [queryClient, queryKey])

  return (
    <Stack>
      <TextField
        name="title"
        control={control}
      />
      <TextField
        name="description"
        control={control}
      />
      <Select
        label="Priority"
        name="priorityID"
        control={control}
        children={priorities.map((priority) => (
          <MenuItem key={priority.id} value={priority.id}>
            {priority.name}
          </MenuItem>
        ))}
      />
      <Select
        label="Status"
        name="statusID"
        control={control}
        children={status.map((s) => (
          <MenuItem key={s.id} value={s.id}>
            {s.value}
          </MenuItem>
        ))}
      />
      <MultiSelectAutocomplete
        label="Labels"
        name="labelIDs"
        control={control}
        labels={labels}
      />
      <Button onClick={handleSubmit(handleSearch)}>
        検索
      </Button>
    </Stack>
  )
}

export default TodoSearch
