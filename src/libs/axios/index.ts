//NOTE: https://orval.dev/reference/configuration/output#mutator
// use-custom-instance.ts

import Axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { API_BASE_URL } from '@/constants/env'
import qs from 'qs';

export const AXIOS_INSTANCE = Axios.create({ baseURL: API_BASE_URL ? API_BASE_URL : 'http://localhost:8001', timeout: 30000 })

export const useCustomInstance = <T>(): ((config: AxiosRequestConfig) => Promise<T>) => {
  return async (config: AxiosRequestConfig) => {
    const promise = AXIOS_INSTANCE.request({
      ...config,
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
    }).then(({ data }) => data)

    return promise
  }
}

export type ErrorType<Error> = AxiosError<Error>
