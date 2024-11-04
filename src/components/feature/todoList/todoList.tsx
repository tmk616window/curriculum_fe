import { Todo } from '@/api/generated/todoAppAPI.schemas'
import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TextField } from '@mui/material'
import { useState } from 'react'

type TodoListProps = {
  todoList: Todo[]
}

const TodoList: React.FC<TodoListProps> = ({
  todoList
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ paddingY: 0.5 }}>タイトル</TableCell>
            <TableCell sx={{ paddingY: 0.5 }}>ステータス</TableCell>
            <TableCell sx={{ paddingY: 0.5 }}>優先度</TableCell>
            <TableCell sx={{ paddingY: 0.5 }}>作成日</TableCell>
            <TableCell sx={{ paddingY: 0.5 }}>完了日</TableCell>
            <TableCell sx={{ paddingY: 0.5 }}>説明</TableCell>
            <TableCell sx={{ paddingY: 0.5 }}>ラベル</TableCell>
            <TableCell sx={{ paddingY: 0.5 }}>入力</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todoList.map((todo) => (
            <TableRow key={todo.id} sx={{ paddingY: 0.5 }}>
              <TableCell sx={{ paddingY: 0.5 }}>{todo.title}</TableCell>
              <TableCell sx={{ paddingY: 0.5 }}>{todo.status.value}</TableCell>
              <TableCell sx={{ paddingY: 0.5 }}>{todo.priority.name}</TableCell>
              <TableCell sx={{ paddingY: 0.5 }}>{new Date(todo.createdAt).toLocaleDateString()}</TableCell>
              <TableCell sx={{ paddingY: 0.5 }}>
                {todo.finishedAt ? new Date(todo.finishedAt).toLocaleDateString() : '-'}
              </TableCell>
              <TableCell sx={{ paddingY: 0.5 }}>{todo.description || '-'}</TableCell>
              <TableCell sx={{ paddingY: 0.5 }}>
                {todo.labels ? todo.labels.map(label => label.value).join(', ') : '-'}
              </TableCell>
              <TableCell sx={{ paddingY: 0.5 }}>
                <TextField type="text" label="入力" fullWidth />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TodoList
