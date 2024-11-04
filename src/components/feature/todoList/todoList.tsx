import { Todo } from '@/api/generated/todoAppAPI.schemas'
import { IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TextField } from '@mui/material'
import { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

type TodoListProps = {
  todoList: Todo[]
}

const TodoList: React.FC<TodoListProps> = ({
  todoList
}) => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 350 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{ paddingY: 0.5 }}>タイトル</TableCell>
            <TableCell sx={{ paddingY: 0.5 }}>ステータス</TableCell>
            <TableCell sx={{ paddingY: 0.5 }}>優先度</TableCell>
            <TableCell sx={{ paddingY: 0.5 }}>作成日</TableCell>
            <TableCell sx={{ paddingY: 0.5 }}>完了日</TableCell>
            <TableCell sx={{ paddingY: 0.5 }}>説明</TableCell>
            <TableCell sx={{ paddingY: 0.5 }}>ラベル</TableCell>
            <TableCell sx={{ paddingY: 0.5 }}></TableCell>
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
              <TableCell sx={{ paddingY: 0.5, display: 'flex', gap: 1 }}>
                <IconButton color="success">
                  <DoneIcon />
                </IconButton>
                <IconButton color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton color="secondary">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </TableContainer>
  )
}

export default TodoList
