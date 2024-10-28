/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Tech Curriculum OpenAPI
 * OpenAPI spec version: 1.0.0
 */
import {
  useQuery
} from '@tanstack/react-query'
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import {
  useCallback
} from 'react'
import type {
  SampleResponse
} from './techCurriculumOpenAPI.schemas'
import { useCustomInstance } from '../../libs/axios/index';
import type { ErrorType } from '../../libs/axios/index';



/**
 * This is a sample API
 * @summary Sample API
 */
export const useGetPathToSampleHook = () => {
        const getPathToSample = useCustomInstance<SampleResponse>();

        return useCallback((
    
 signal?: AbortSignal
) => {
        return getPathToSample(
          {url: `/path/to/sample`, method: 'GET', signal
    },
          );
        }, [getPathToSample])
      }
    

export const getGetPathToSampleQueryKey = () => {
    return [`/path/to/sample`] as const;
    }

    
export const useGetPathToSampleQueryOptions = <TData = Awaited<ReturnType<ReturnType<typeof useGetPathToSampleHook>>>, TError = ErrorType<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetPathToSampleHook>>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetPathToSampleQueryKey();

  const getPathToSample =  useGetPathToSampleHook();

    const queryFn: QueryFunction<Awaited<ReturnType<ReturnType<typeof useGetPathToSampleHook>>>> = ({ signal }) => getPathToSample(signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetPathToSampleHook>>>, TError, TData> & { queryKey: QueryKey }
}

export type GetPathToSampleQueryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useGetPathToSampleHook>>>>
export type GetPathToSampleQueryError = ErrorType<unknown>


export function useGetPathToSample<TData = Awaited<ReturnType<ReturnType<typeof useGetPathToSampleHook>>>, TError = ErrorType<unknown>>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetPathToSampleHook>>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useGetPathToSampleHook>>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetPathToSample<TData = Awaited<ReturnType<ReturnType<typeof useGetPathToSampleHook>>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetPathToSampleHook>>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useGetPathToSampleHook>>>,
          TError,
          TData
        > , 'initialData'
      >, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetPathToSample<TData = Awaited<ReturnType<ReturnType<typeof useGetPathToSampleHook>>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetPathToSampleHook>>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary Sample API
 */

export function useGetPathToSample<TData = Awaited<ReturnType<ReturnType<typeof useGetPathToSampleHook>>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetPathToSampleHook>>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = useGetPathToSampleQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




