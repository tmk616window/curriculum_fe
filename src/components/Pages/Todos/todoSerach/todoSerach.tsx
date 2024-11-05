
import { Label, Priority, Status } from '@/api/generated/todoAppAPI.schemas'
import { getTodosQueryParams } from '@/api/generated/zod/todoAppAPI'
import { MultiSelectAutocomplete } from '@/components/common/MultiSelectAutocomplete'
import { Select } from '@/components/common/Select/Select'
import { TextField } from '@/components/common/TextField'
import { useForm } from '@/hooks/useForm'
import { Button, Grid, MenuItem, Paper, Stack } from '@mui/material'
import { QueryKey, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { TypeOf } from 'zod'

type TodoSearchProps = {
  labels: Label[]
  priorities: Priority[]
  status: Status[]
  queryKey: QueryKey
  search: TypeOf<typeof getTodosQueryParams>
  setSearch: (search: TypeOf<typeof getTodosQueryParams>) => void
}

const TodoSearch: React.FC<TodoSearchProps> = ({
  labels,
  priorities,
  status,
  queryKey,
  search,
  setSearch
}) => {
  const queryClient = useQueryClient()
  const { control, handleSubmit } = useForm(getTodosQueryParams)
  const router = useRouter()

  const handleSearch = useCallback<SubmitHandler<TypeOf<typeof getTodosQueryParams>>>(async (formData) => {
    setSearch({ ...search, ...formData })
    queryClient.invalidateQueries({ queryKey })
    router.push({ query: { ...search, ...formData } });
  }, [queryClient, queryKey])

  return (
    <Paper sx={{ padding: 4 }}>
      <Stack spacing={3} alignItems="center" >
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <TextField name="title" control={control} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="description" control={control} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select label="優先度" name="priorityID" control={control} >
              {priorities.map((priority) => (
                <MenuItem key={priority.id} value={priority.id}>
                  {priority.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select label="ステータス" name="statusID" control={control} >
              {status.map((s) => (
                <MenuItem key={s.id} value={s.id}>
                  {s.value}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={9}>
            <MultiSelectAutocomplete
              label="ラベル"
              name="labelIDs"
              control={control}
              labels={labels}
            />
          </Grid>
          <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(handleSearch)}
              fullWidth
              sx={{ height: '100%' }}
            >
              検索
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  )
}

export default TodoSearch
