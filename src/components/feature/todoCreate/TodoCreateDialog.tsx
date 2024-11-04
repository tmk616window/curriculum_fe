import { useForm } from "@/hooks/useForm";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, MenuItem, Stack } from "@mui/material";
import { useCallback, useState } from "react";
import { useCreateTodo } from "./useCreateTodo";
import { postTodoBody } from "@/api/generated/zod/todoAppAPI";
import { TextField } from "@/components/common/TextField";
import { MultiSelectAutocomplete } from "@/components/common/MultiSelectAutocomplete";
import { CreateTodoInput, Label, Priority, Status } from "@/api/generated/todoAppAPI.schemas";
import { Select } from "@/components/common/Select/Select";
import { SubmitHandler } from "react-hook-form";
import { QueryKey, useQueryClient } from "@tanstack/react-query";

type todoCreateDialogProps = {
  labels: Label[]
  status: Status[]
  priorities: Priority[]
  queryKey: QueryKey
}

export const TodoCreateDialog: React.FC<todoCreateDialogProps> = ({ labels, status, priorities, queryKey }) => {
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)
  const { control, reset, handleSubmit } = useForm(postTodoBody)
  const { handleCreateTodo } = useCreateTodo()

  const handleCreate = useCallback<SubmitHandler<CreateTodoInput>>(async (data) => {
    const isSuccess = await handleCreateTodo(data)
    if (isSuccess) {
      reset()
      queryClient.invalidateQueries({ queryKey });
      setOpen(false)
    }
  }, [handleCreateTodo])


  const handleClose = useCallback(() => {
    reset()
    setOpen(false)
  }, [reset])

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 2 }}>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          作成する
        </Button>
      </Box>
      <Dialog open={open} maxWidth="sm" fullWidth>
        <DialogTitle>Create Todo</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2} mt={1}>
            <TextField
              name="title"
              control={control}
            />
            <TextField
              name="description"
              control={control}
            />
            <Select
              label="優先度"
              name="priorityID"
              control={control}
            >
              {priorities.map((p) => (
                <MenuItem key={p.id} value={p.id}>
                  {p.name}
                </MenuItem>
              ))}
            </Select>
            <Select
              label="ステータス"
              name="statusID"
              control={control}
            >
              {status.map((s) => (
                <MenuItem key={s.id} value={s.id}>
                  {s.value}
                </MenuItem>
              ))}
            </Select>
            <MultiSelectAutocomplete
              label="ラベル"
              name="labelIDs"
              control={control}
              labels={labels}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            閉じる
          </Button>
          <Button
            onClick={handleSubmit(async (data) => await handleCreate(data))}
            color="primary"
            variant="contained"
          >
            作成する
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
