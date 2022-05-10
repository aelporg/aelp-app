/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EvaluationCriteriaType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: EnvironmentRunTestCasesMutation
// ====================================================

export interface EnvironmentRunTestCasesMutation_runTestCases_criteria_inputOutputEvalCrit {
  __typename: "InputOutputEvaluationCriteria";
  inputs: string | null;
  outputs: string | null;
}

export interface EnvironmentRunTestCasesMutation_runTestCases_criteria {
  __typename: "EvaluationCriteria";
  name: string;
  type: EvaluationCriteriaType;
  inputOutputEvalCrit: EnvironmentRunTestCasesMutation_runTestCases_criteria_inputOutputEvalCrit | null;
}

export interface EnvironmentRunTestCasesMutation_runTestCases_output_compile {
  __typename: "RunResultOutput";
  output: string;
}

export interface EnvironmentRunTestCasesMutation_runTestCases_output_run {
  __typename: "RunResultOutput";
  output: string;
  stderr: string;
  stdout: string;
}

export interface EnvironmentRunTestCasesMutation_runTestCases_output {
  __typename: "RunCodeOutput";
  compile: EnvironmentRunTestCasesMutation_runTestCases_output_compile;
  run: EnvironmentRunTestCasesMutation_runTestCases_output_run;
}

export interface EnvironmentRunTestCasesMutation_runTestCases {
  __typename: "RunTestCasesOutput";
  status: string;
  criteria: EnvironmentRunTestCasesMutation_runTestCases_criteria;
  output: EnvironmentRunTestCasesMutation_runTestCases_output | null;
}

export interface EnvironmentRunTestCasesMutation {
  runTestCases: EnvironmentRunTestCasesMutation_runTestCases[];
}

export interface EnvironmentRunTestCasesMutationVariables {
  id: string;
}
