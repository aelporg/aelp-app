import { useMutation, useQuery, useSubscription } from '@apollo/client'
import React from 'react'
import {
  EnvironmentQuery,
  EnvironmentQueryVariables,
} from 'typings/graphql/EnvironmentQuery'
import {
  UpdateFileMutation,
  UpdateFileMutationVariables,
} from 'typings/graphql/UpdateFileMutation'
import { ENVIRNOMENT_QUERY } from './graphql/envirnoment-query'
import { ENVIRONMENT_RUN_CODE_MUTATION } from './graphql/envirnoment-run-code-mutation'
import { UPDATE_FILE_MUTATION } from './graphql/envirnoment-update-code-mutation'

interface Operation {
  func: (...args: any[]) => any
  loading: boolean
  result: any
  error: any
}

type operations = 'updateFile' | 'runCode'
interface IEnvironmentContext {
  environment?: EnvironmentQuery['envirnoment']
  environmentLoading: boolean
  operations: Record<operations, Operation>
}

export const EnvironmentContext = React.createContext<
  IEnvironmentContext | undefined
>(undefined)

export function useEnvironmentContext() {
  const context = React.useContext(EnvironmentContext)
  if (context === undefined) {
    throw new Error(
      'useEnvironmentContext must be used within a EnvironmentContext'
    )
  }
  return context
}

export function EnviromentProvider(props: {
  children: React.ReactNode
  environmentId: string
}) {
  const { data, loading } = useQuery<
    EnvironmentQuery,
    EnvironmentQueryVariables
  >(ENVIRNOMENT_QUERY, {
    variables: {
      id: props.environmentId,
    },
    fetchPolicy: props.environmentId ? 'cache-and-network' : 'standby',
  })

  const environment = data?.envirnoment

  const [
    updateFile,
    {
      data: updateFileResult,
      loading: updateFileLoading,
      error: updateFileError,
    },
  ] = useMutation<UpdateFileMutation, UpdateFileMutationVariables>(
    UPDATE_FILE_MUTATION,
    {
      update: (cache, { data }) => {
        const { envirnoment } = cache.readQuery<
          EnvironmentQuery,
          EnvironmentQueryVariables
        >({
          query: ENVIRNOMENT_QUERY,
          variables: {
            id: environment.id,
          },
        })

        const newEnv = {
          ...envirnoment,
          files: {
            ...envirnoment.files.map(file => {
              if (file.id === data.updateFile.id) {
                return { ...file, ...data.updateFile }
              }
              return file
            }),
          },
        }

        cache.writeQuery<EnvironmentQuery, EnvironmentQueryVariables>({
          query: ENVIRNOMENT_QUERY,
          variables: {
            id: environment.id,
          },
          data: {
            envirnoment: newEnv,
          },
        })
      },
    }
  )

  const [
    runCode,
    { data: runCodeResult, loading: runCodeLoading, error: runCodeError },
  ] = useMutation(ENVIRONMENT_RUN_CODE_MUTATION, {
    fetchPolicy: 'no-cache',
    variables: {
      id: environment?.id,
    },
  })

  return (
    <EnvironmentContext.Provider
      value={{
        environment,
        environmentLoading: loading,
        operations: {
          updateFile: {
            result: updateFileResult,
            func: updateFile,
            loading: updateFileLoading,
            error: updateFileError,
          },
          runCode: {
            func: runCode,
            loading: runCodeLoading,
            error: runCodeError,
            result: runCodeResult,
          },
        },
      }}
    >
      {props.children}
    </EnvironmentContext.Provider>
  )
}
