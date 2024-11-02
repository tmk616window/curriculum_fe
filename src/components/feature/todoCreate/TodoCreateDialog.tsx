import { useForm } from "@/hooks/useForm";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, MenuItem } from "@mui/material";
import { useCallback, useState } from "react";
import { useCreateTodo } from "./useCreateTodo";
import { postTodoBody } from "@/api/generated/zod/todoAppAPI";
import { TextField } from "@/components/common/TextField";
import { MultiSelectAutocomplete } from "@/components/common/MultiSelectAutocomplete";
import { Label, Priority, Status } from "@/api/generated/todoAppAPI.schemas";
import { Select } from "@/components/common/Select/Select";



type todoCreateDialogProps = {
  labels: Label[]
  status: Status[]
  priorities: Priority[]
}

export const TodoCreateDialog: React.FC<todoCreateDialogProps> = ({ labels, status, priorities }) => {
  const [open, setOpen] = useState(false)
  const { control, reset } = useForm(postTodoBody)

  const { handleCreateTodo } = useCreateTodo()

  const handleCreate = useCallback(async () => {
    const isSuccess = await handleCreateTodo({
      title: 'test1112345',
      description: 'aaaa',
      labelIDs: [1],
      priorityID: 1,
      statusID: 1
    })

    if (isSuccess) {
      setOpen(false)
      reset()
    }
  }, [handleCreateTodo])

  const handleClose = useCallback(() => {
    setOpen(false)
    reset()
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
          <Button onClick={handleCreate} type="submit" >
            作成する
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
