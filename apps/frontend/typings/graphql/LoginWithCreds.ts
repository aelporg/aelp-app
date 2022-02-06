/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginWithCreds
// ====================================================

export interface LoginWithCreds_loginWithCreds {
  __typename: "UserAuthInfo";
  token: string;
  userId: string;
  refreshToken: string;
}

export interface LoginWithCreds {
  loginWithCreds: LoginWithCreds_loginWithCreds;
}

export interface LoginWithCredsVariables {
  email: string;
  password: string;
}
