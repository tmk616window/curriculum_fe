import { defineConfig } from 'orval'
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  apiClient: {
    input: './../go-todo/server/doc/openapi.yaml',
    output: {
      client: 'react-query',
      mode: 'split',
      prettier: true,
      target: './src/api/generated',
      override: {
        mutator: {
          path: './src/libs/axios/index.ts',
          name: 'useCustomInstance',
          alias: {
            '@': path.resolve(__dirname, './src'),
          },
        },
      },
    },
  },
  zod: {
    input: './../go-todo/server/doc/openapi.yaml',
    output: {
      mode: 'split',
      client: 'zod',
      target: './src/api/generated/zod',
    },
  },
})
