import { useQuery } from '@apollo/client'
import React from 'react'
import {
  EnvironmentQuery,
  EnvironmentQueryVariables,
} from 'typings/graphql/EnvironmentQuery'
import { ENVIRNOMENT_QUERY } from './graphql/envirnoment-query'

interface IEnvironmentContext {
  environment?: EnvironmentQuery['envirnoment']
  loading: boolean
}

export const EnvironmentContext = React.createContext<IEnvironmentContext>({
  environment: undefined,
  loading: true,
})

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

  return (
    <EnvironmentContext.Provider
      value={{
        environment: data?.envirnoment,
        loading,
      }}
    >
      {props.children}
    </EnvironmentContext.Provider>
  )
}
