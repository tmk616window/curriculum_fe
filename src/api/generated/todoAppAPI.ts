/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Todo App API
 * An API for managing todo items.
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import {
  useCallback
} from 'react'
import type {
  CreateTodoInput,
  CreateTodoResponse,
  ErrorResponse,
  GetTodos200,
  GetTodosParams,
  ResponseSearchTodo
} from './todoAppAPI.schemas'
import { useCustomInstance } from '../../libs/axios/index';
import type { ErrorType } from '../../libs/axios/index';



/**
 * @summary Get all todo items
 */
export const useGetTodosHook = () => {
        const getTodos = useCustomInstance<GetTodos200>();

        return useCallback((
    params?: GetTodosParams,
 signal?: AbortSignal
) => {
        return getTodos(
          {url: `/todos`, method: 'GET',
        params, signal
    },
          );
        }, [getTodos])
      }
    

export const getGetTodosQueryKey = (params?: GetTodosParams,) => {
    return [`/todos`, ...(params ? [params]: [])] as const;
    }

    
export const useGetTodosQueryOptions = <TData = Awaited<ReturnType<ReturnType<typeof useGetTodosHook>>>, TError = ErrorType<ErrorResponse>>(params?: GetTodosParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetTodosHook>>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetTodosQueryKey(params);

  const getTodos =  useGetTodosHook();

    const queryFn: QueryFunction<Awaited<ReturnType<ReturnType<typeof useGetTodosHook>>>> = ({ signal }) => getTodos(params, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetTodosHook>>>, TError, TData> & { queryKey: QueryKey }
}

export type GetTodosQueryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useGetTodosHook>>>>
export type GetTodosQueryError = ErrorType<ErrorResponse>


export function useGetTodos<TData = Awaited<ReturnType<ReturnType<typeof useGetTodosHook>>>, TError = ErrorType<ErrorResponse>>(
 params: undefined |  GetTodosParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetTodosHook>>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useGetTodosHook>>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetTodos<TData = Awaited<ReturnType<ReturnType<typeof useGetTodosHook>>>, TError = ErrorType<ErrorResponse>>(
 params?: GetTodosParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetTodosHook>>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useGetTodosHook>>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetTodos<TData = Awaited<ReturnType<ReturnType<typeof useGetTodosHook>>>, TError = ErrorType<ErrorResponse>>(
 params?: GetTodosParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetTodosHook>>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary Get all todo items
 */

export function useGetTodos<TData = Awaited<ReturnType<ReturnType<typeof useGetTodosHook>>>, TError = ErrorType<ErrorResponse>>(
 params?: GetTodosParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetTodosHook>>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = useGetTodosQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Search for todo items
 */
export const useGetSearchHook = () => {
        const getSearch = useCustomInstance<ResponseSearchTodo>();

        return useCallback((
    
 signal?: AbortSignal
) => {
        return getSearch(
          {url: `/search`, method: 'GET', signal
    },
          );
        }, [getSearch])
      }
    

export const getGetSearchQueryKey = () => {
    return [`/search`] as const;
    }

    
export const useGetSearchQueryOptions = <TData = Awaited<ReturnType<ReturnType<typeof useGetSearchHook>>>, TError = ErrorType<ErrorResponse>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetSearchHook>>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetSearchQueryKey();

  const getSearch =  useGetSearchHook();

    const queryFn: QueryFunction<Awaited<ReturnType<ReturnType<typeof useGetSearchHook>>>> = ({ signal }) => getSearch(signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetSearchHook>>>, TError, TData> & { queryKey: QueryKey }
}

export type GetSearchQueryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useGetSearchHook>>>>
export type GetSearchQueryError = ErrorType<ErrorResponse>


export function useGetSearch<TData = Awaited<ReturnType<ReturnType<typeof useGetSearchHook>>>, TError = ErrorType<ErrorResponse>>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetSearchHook>>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useGetSearchHook>>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetSearch<TData = Awaited<ReturnType<ReturnType<typeof useGetSearchHook>>>, TError = ErrorType<ErrorResponse>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetSearchHook>>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useGetSearchHook>>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetSearch<TData = Awaited<ReturnType<ReturnType<typeof useGetSearchHook>>>, TError = ErrorType<ErrorResponse>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetSearchHook>>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary Search for todo items
 */

export function useGetSearch<TData = Awaited<ReturnType<ReturnType<typeof useGetSearchHook>>>, TError = ErrorType<ErrorResponse>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetSearchHook>>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = useGetSearchQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Create a new todo item
 */
export const usePostTodoHook = () => {
        const postTodo = useCustomInstance<CreateTodoResponse>();

        return useCallback((
    createTodoInput: CreateTodoInput,
 ) => {
        return postTodo(
          {url: `/todo`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createTodoInput
    },
          );
        }, [postTodo])
      }
    


export const usePostTodoMutationOptions = <TError = ErrorType<ErrorResponse>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostTodoHook>>>, TError,{data: CreateTodoInput}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostTodoHook>>>, TError,{data: CreateTodoInput}, TContext> => {
const {mutation: mutationOptions} = options ?? {};

      const postTodo =  usePostTodoHook()


      const mutationFn: MutationFunction<Awaited<ReturnType<ReturnType<typeof usePostTodoHook>>>, {data: CreateTodoInput}> = (props) => {
          const {data} = props ?? {};

          return  postTodo(data,)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostTodoMutationResult = NonNullable<Awaited<ReturnType<ReturnType<typeof usePostTodoHook>>>>
    export type PostTodoMutationBody = CreateTodoInput
    export type PostTodoMutationError = ErrorType<ErrorResponse>

    /**
 * @summary Create a new todo item
 */
export const usePostTodo = <TError = ErrorType<ErrorResponse>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostTodoHook>>>, TError,{data: CreateTodoInput}, TContext>, }
): UseMutationResult<
        Awaited<ReturnType<ReturnType<typeof usePostTodoHook>>>,
        TError,
        {data: CreateTodoInput},
        TContext
      > => {

      const mutationOptions = usePostTodoMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
