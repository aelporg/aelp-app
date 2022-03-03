/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateFileMutation
// ====================================================

export interface UpdateFileMutation_updateFile {
  __typename: "File";
  id: string;
  data: string;
}

export interface UpdateFileMutation {
  updateFile: UpdateFileMutation_updateFile;
}

export interface UpdateFileMutationVariables {
  id: string;
  data: string;
}
