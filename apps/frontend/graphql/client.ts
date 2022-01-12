import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { createHttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { UserAuthInfo } from '@modules/auth/store/auth-store';

let userAuth: UserAuthInfo | null = null;

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      if (err.extensions.code === 'UNAUTHENTICATED') {
        updateAuth(() => null);
      }
    }
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    const context = operation.getContext();
    const {
      response: { headers },
    } = context;

    if (getAuth() && headers.get('set-access-token')) {
      updateAuth(auth => {
        auth.token = headers.get('set-access-token');
        return auth;
      });
    }

    return response;
  });
});

const readAuthFromLocalStorage = (): UserAuthInfo | null => {
  let auth: UserAuthInfo = null;

  try {
    const authJson = localStorage.getItem('auth');
    auth = JSON.parse(authJson);
  } catch {
    auth = null;
  }

  return auth;
};

const updateAuth = (
  func: (auth: UserAuthInfo) => UserAuthInfo | null
): void => {
  userAuth = func(userAuth);
  localStorage.setItem('auth', JSON.stringify(userAuth));
};

const getAuth = (): UserAuthInfo | null => {
  if (userAuth) {
    return userAuth;
  }

  const auth = readAuthFromLocalStorage();
  userAuth = auth;

  return userAuth;
};

const authMiddleware = new ApolloLink((operation, forward) => {
  const auth = getAuth();

  operation.setContext({
    headers: {
      'x-access-token': auth?.token ? auth.token : '',
      'x-refresh-token': auth?.refreshToken ? auth.refreshToken : '',
    },
  });

  return forward(operation);
});

const mainLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT || '/graphql',
});

export function getApiLink() {
  return from([errorLink, authMiddleware, afterwareLink, mainLink]);
}

export const gqlClient = new ApolloClient({
  link: getApiLink(),
  cache: new InMemoryCache(),
});
