/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EnvironmentRunCodeMutation
// ====================================================

export interface EnvironmentRunCodeMutation_runCode_run {
  __typename: "RunResultOutput";
  stderr: string;
  stdout: string;
  code: number;
  output: string;
}

export interface EnvironmentRunCodeMutation_runCode_compile {
  __typename: "RunResultOutput";
  stderr: string;
  stdout: string;
  code: number;
  output: string;
}

export interface EnvironmentRunCodeMutation_runCode {
  __typename: "RunCodeOutput";
  run: EnvironmentRunCodeMutation_runCode_run;
  compile: EnvironmentRunCodeMutation_runCode_compile | null;
}

export interface EnvironmentRunCodeMutation {
  runCode: EnvironmentRunCodeMutation_runCode;
}

export interface EnvironmentRunCodeMutationVariables {
  id: string;
  input?: string | null;
}
