import React, { useMemo } from 'react'
import { useQuery } from '@apollo/client'
import { MeQuery, MeQuery_me } from 'typings/graphql/MeQuery'
import { useAuthStore } from './auth-store'
import { ME_QUERY } from 'graphql/queries/me-query'

class Me {
  constructor(public readonly data: MeQuery_me) {}

  get id(): string {
    return this.data.id
  }

  get name(): string {
    return this.data.name
  }

  get shortName(): string {
    return this.data.shortName
  }
}

export interface MeStore {
  me?: Me
  isLoading: boolean
}

export const MeStoreContext = React.createContext<MeStore | undefined>(
  undefined
)

export function useMeStore() {
  const value = React.useContext(MeStoreContext)

  if (!value) {
    throw new Error('useMeStore must be used within a MeStoreProvider')
  }

  return value
}

export default function MeStoreProvider(props: { children?: React.ReactNode }) {
  const { auth } = useAuthStore()
  const { data, loading } = useQuery<MeQuery | undefined>(ME_QUERY, {
    skip: !auth,
  })
  const me = useMemo(() => (data?.me ? new Me(data.me) : undefined), [data])

  return (
    <MeStoreContext.Provider
      value={{
        me,
        isLoading: loading,
      }}
    >
      {props.children}
    </MeStoreContext.Provider>
  )
}
