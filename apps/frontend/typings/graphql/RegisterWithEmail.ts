/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserRegisterInput } from './globalTypes'

// ====================================================
// GraphQL mutation operation: RegisterWithEmail
// ====================================================

export interface RegisterWithEmail_register {
  __typename: 'UserAuthInfo'
  token: string
  userId: string
  refreshToken: string
}

export interface RegisterWithEmail {
  register: RegisterWithEmail_register
}

export interface RegisterWithEmailVariables {
  data: UserRegisterInput
}
