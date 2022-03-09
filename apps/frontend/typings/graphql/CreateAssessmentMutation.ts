/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AssessmentCreateInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateAssessmentMutation
// ====================================================

export interface CreateAssessmentMutation_createAssessment {
  __typename: "Assessment";
  id: string;
}

export interface CreateAssessmentMutation {
  createAssessment: CreateAssessmentMutation_createAssessment;
}

export interface CreateAssessmentMutationVariables {
  data: AssessmentCreateInput;
}
