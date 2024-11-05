import { Todo } from '@/api/generated/todoAppAPI.schemas'
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import { getTodosQueryParams } from '@/api/generated/zod/todoAppAPI';
import { TypeOf } from 'zod';
import { QueryKey, useQueryClient } from '@tanstack/react-query';

type TodoListProps = {
  todoList: Todo[]
  pageCount: number
  setSearch: (search: TypeOf<typeof getTodosQueryParams>) => void
  search: TypeOf<typeof getTodosQueryParams>
  queryKey: QueryKey
}

const TodoList: React.FC<TodoListProps> = ({
  todoList,
  pageCount,
  setSearch,
  search,
  queryKey
}) => {
  const queryClient = useQueryClient()

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setSearch({ ...search, offset: (newPage * (search.limit || 5) - 1) })
    queryClient.invalidateQueries({ queryKey })
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSearch({ ...search, limit: parseInt(event.target.value, 10) })
    queryClient.invalidateQueries({ queryKey })
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: 300 }}>
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
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[5, 10, 25, 50]}
        rowsPerPage={search.limit || 5}
        onRowsPerPageChange={handleChangeRowsPerPage}
        count={pageCount}
        page={search.offset ? (search.offset + 1) / (search.limit || 5) : 0}
        onPageChange={handleChangePage}
      />
    </>
  )
}

export default TodoList
