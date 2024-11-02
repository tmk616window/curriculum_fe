import { useForm } from "@/hooks/useForm";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { useCreateTodo } from "./useCreateTodo";
import { postTodoBody } from "@/api/generated/zod/todoAppAPI";



type todoCreateDialogProps = {

}

export const TodoCreateDialog = (props: todoCreateDialogProps) => {
  const [open, setOpen] = useState(false)
  const { control } = useForm(postTodoBody)

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
    }
  }, [handleCreateTodo])

  return (
    <>
      <Button onClick={() => setOpen(true)}>作成する</Button>
      <Dialog open={open} >
        <DialogTitle>Create Todo</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
          />
          <TextField
            label="Description"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>閉じる</Button>
          <Button onClick={handleCreate} >
            作成する
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
