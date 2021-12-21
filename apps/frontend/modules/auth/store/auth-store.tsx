import React, { useCallback, useEffect, useMemo } from 'react';
import { useApolloClient } from '@apollo/client';
import { useLocalStorage } from 'react-use';
import getBackendLink from 'lib/getBackendLink';

interface UserAuthInfo {
  token: string;
  userId: string;
  refreshToken?: string;
}

interface IAuthStore {
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

export default function AuthStoreProvider(props: React.PropsWithChildren<any>) {
  const [auth, setAuth, remove] = useLocalStorage('auth', null);
  const apolloClient = useApolloClient();

  const login = useCallback(
    (auth: UserAuthInfo) => {
      setAuth(auth);
      apolloClient.resetStore();
      apolloClient.setLink(getBackendLink());
    },
    [apolloClient, setAuth]
  );

  const logout = useCallback(() => {
    remove();
    apolloClient.resetStore();
    apolloClient.setLink(getBackendLink());
  }, [apolloClient, remove]);

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
