import React, { useCallback, useEffect, useMemo } from 'react';
import { useApolloClient, gql } from '@apollo/client';
import { useLocalStorage } from 'react-use';
import { getApiLink, gqlClient } from 'graphql/client';

export interface UserAuthInfo {
  token: string;
  userId: string;
  refreshToken: string;
}

export interface IAuthStore {
  auth?: UserAuthInfo;
  login(auth: UserAuthInfo): void;
  logout(): void;
}

const AuthStore = React.createContext<IAuthStore | undefined>(undefined);

export function useAuthStore() {
  const value = React.useContext(AuthStore);

  if (!value) {
    throw new Error('useAuthStore must be used within a AuthStoreProvider');
  }

  return value;
}

export function refreshToken() {
  // return gqlClient.mutate({
  //   mutation: gql`
  //     mutation RefreshToken {
  //       refreshToken
  //     }
  //   `,
  // });
}

export default function AuthStoreProvider(props: React.PropsWithChildren<any>) {
  const [auth, setAuth, remove] = useLocalStorage('auth', null);
  const apolloClient = useApolloClient();

  const refreshApolloClient = useCallback(async () => {
    apolloClient.resetStore();
    apolloClient.setLink(getApiLink());
  }, [apolloClient]);

  const login = useCallback(
    (auth: UserAuthInfo) => {
      setAuth(auth);
      refreshApolloClient();
    },
    [refreshApolloClient, setAuth]
  );

  const logout = useCallback(() => {
    remove();
    refreshApolloClient();
  }, [refreshApolloClient, remove]);

  useEffect(() => {
    if (!auth) {
      console.log('no auth');
    }
  }, [auth]);

  const storeValue = useMemo(
    () =>
      ({
        auth,
        login,
        logout,
      } as IAuthStore),
    [auth, login, logout]
  );

  return (
    <AuthStore.Provider value={storeValue}>
      {React.Children.only(props.children)}
    </AuthStore.Provider>
  );
}
