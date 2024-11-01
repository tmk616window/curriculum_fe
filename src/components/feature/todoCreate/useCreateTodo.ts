import { usePostTodo } from "@/api/generated/todoAppAPI"
import { CreateTodoInput, Todo } from "@/api/generated/todoAppAPI.schemas"
import { QueryKey, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useCallback } from "react"


export const useCreateTodo = () => {
  const { mutateAsync, isSuccess } = usePostTodo()
  const handleCreateTodo = useCallback(async (input: CreateTodoInput) => {
    try {
      const result = await mutateAsync({ data: input })

      if (result) {
        alert("保存に成功しました")
        return true
      }

      alert("予期せぬエラーが発生しました。もう一度お試しください")
      return false
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(err.message)
        return false
      }

      alert("予期せぬエラーが発生しました。もう一度お試しください")
      return false
    }
  }, [mutateAsync, isSuccess])

  return {
    handleCreateTodo
  }
}
