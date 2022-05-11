/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateDiscussionResponse
// ====================================================

export interface CreateDiscussionResponse_createDiscussionResponse {
  __typename: "Discussion";
  id: string;
}

export interface CreateDiscussionResponse {
  createDiscussionResponse: CreateDiscussionResponse_createDiscussionResponse;
}

export interface CreateDiscussionResponseVariables {
  response: string;
  discussionId: string;
}
