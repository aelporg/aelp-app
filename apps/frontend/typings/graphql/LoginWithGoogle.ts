/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginWithGoogle
// ====================================================

export interface LoginWithGoogle_loginWithGoogle {
  __typename: "UserAuthInfo";
  token: string;
  refreshToken: string;
  userId: string;
}

export interface LoginWithGoogle {
  loginWithGoogle: LoginWithGoogle_loginWithGoogle;
}

export interface LoginWithGoogleVariables {
  tokenId: string;
}
