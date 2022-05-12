/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateDiscussionInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateDiscussionMutation
// ====================================================

export interface CreateDiscussionMutation_createDiscussion {
  __typename: "Discussion";
  id: string;
}

export interface CreateDiscussionMutation {
  createDiscussion: CreateDiscussionMutation_createDiscussion;
}

export interface CreateDiscussionMutationVariables {
  data: CreateDiscussionInput;
}
