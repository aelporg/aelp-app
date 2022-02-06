import { gql } from '@apollo/client'

export const REGISTER_WITH_EMAIL = gql`
  mutation RegisterWithEmail($data: UserRegisterInput!) {
    register(data: $data) {
      token
      userId
      refreshToken
    }
  }
`
