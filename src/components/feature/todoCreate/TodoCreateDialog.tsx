import { useForm } from "@/hooks/useForm";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, MenuItem } from "@mui/material";
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
  const { control, reset, handleSubmit } = useForm<CreateTodoInput>({ schema: postTodoBody })
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
      <Button onClick={() => setOpen(true)}>作成する</Button>
      <Dialog open={open} >
        <DialogTitle>Create Todo</DialogTitle>
        <DialogContent>
          <FormControl>
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
            >
              {priorities.map((p) => <MenuItem key={p.id} value={p.id}>{p.name}</MenuItem>)}
            </Select>
            <Select
              label="Status"
              name="statusID"
              control={control}
            >
              {status.map((s) => <MenuItem key={s.id} value={s.id}>{s.value}</MenuItem>)}
            </Select>
            <MultiSelectAutocomplete
              label="Labels"
              name="labelIDs"
              control={control}
              labels={labels}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>閉じる</Button>
          <Button onClick={handleSubmit(async (data) => await handleCreate(data))} >
            作成する
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
