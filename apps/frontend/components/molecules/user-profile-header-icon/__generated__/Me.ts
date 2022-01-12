/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me {
  __typename: "User";
  id: string;
  firstName: string | null;
  userName: string;
  lastName: string | null;
  email: string;
}

export interface Me {
  me: Me_me;
}
