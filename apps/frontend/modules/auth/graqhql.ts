import { gql } from '@apollo/client';

export const LOGIN_WITH_CREDS_MUTATION = gql`
  mutation LoginWithCreds($userName: String!, $password: String!) {
    loginWithCreds(userName: $userName, password: $password) {
      token
      userId
      refreshToken
    }
  }
`;
