import { gql } from "@apollo/client";

export const REGISTER_WITH_EMAIL = gql`
  mutation RegisterWithEmail($data: UserRegisterDtoWithPassword!) {
    register(data: $data) {
      token
      userId
      refreshToken
    }
  }
`
