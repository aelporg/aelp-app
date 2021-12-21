import { createHttpLink } from '@apollo/client';

export default function getBackendLink() {
  let auth = null;
  try {
    auth = localStorage.getItem('auth');
    auth = JSON.parse(auth);
  } catch {
    auth = null;
  }

  return createHttpLink({
    uri: 'http://localhost:3333/graphql',
    headers: {
      authorization: auth ? `Bearer ${auth.token}` : '',
      'x-refresh-token': auth?.refreshToken ? auth.refreshToken : '',
    },
  });
}
