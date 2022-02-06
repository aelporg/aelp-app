import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import {
  gql,
  ApolloClient,
  ApolloLink,
  createHttpLink,
  from,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'
import { useLocalStorage } from 'react-use'

export interface UserAuthInfo {
  token: string
  userId: string
  refreshToken: string
}

export interface IAuthStore {
  auth?: UserAuthInfo
  login(auth: UserAuthInfo): void
  logout(): void
}

const AuthStore = React.createContext<IAuthStore | undefined>(undefined)

export function useAuthStore() {
  const value = React.useContext(AuthStore)

  if (!value) {
    throw new Error('useAuthStore must be used within a AuthStoreProvider')
  }

  return value
}

export default function AuthStoreProvider(props: React.PropsWithChildren<any>) {
  const [auth, setAuth, remove] = useLocalStorage<UserAuthInfo | null>(
    'auth',
    null
  )

  const afterwareLink = useMemo(
    () =>
      new ApolloLink((operation, forward) => {
        return forward(operation).map(response => {
          const context = operation.getContext()
          const {
            response: { headers },
          } = context

          if (auth && headers.get('set-access-token')) {
            setAuth(auth => {
              auth.token = headers.get('set-access-token')
              return auth
            })
          }

          return response
        })
      }),
    [auth, setAuth]
  )

  const authMiddleware = useMemo(
    () =>
      new ApolloLink((operation, forward) => {
        operation.setContext({
          headers: {
            'x-access-token': auth?.token ? auth.token : '',
            'x-refresh-token': auth?.refreshToken ? auth.refreshToken : '',
          },
        })

        return forward(operation)
      }),
    [auth]
  )

  const mainLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT || '/graphql',
  })

  const getApiLink = useCallback(() => {
    return from([authMiddleware, afterwareLink, mainLink])
  }, [authMiddleware, afterwareLink, mainLink])

  const apolloClient = useMemo(() => {
    return new ApolloClient({
      link: getApiLink(),
      cache: new InMemoryCache(),
    })
  }, [getApiLink])

  const refreshApolloClient = useCallback(async () => {
    await apolloClient.resetStore()
    apolloClient.setLink(getApiLink())
  }, [apolloClient, getApiLink])

  const login = useCallback(
    (auth: UserAuthInfo) => {
      setAuth(auth)
      refreshApolloClient()
    },
    [refreshApolloClient, setAuth]
  )

  const logout = useCallback(() => {
    remove()
    // TODO: logout from server
    refreshApolloClient()
  }, [refreshApolloClient, remove])

  const storeValue = useMemo(
    () =>
      ({
        auth,
        login,
        logout,
      } as IAuthStore),
    [auth, login, logout]
  )

  return (
    <ApolloProvider client={apolloClient}>
      <AuthStore.Provider value={storeValue}>
        {React.Children.only(props.children)}
      </AuthStore.Provider>
    </ApolloProvider>
  )
}
