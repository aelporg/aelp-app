/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Vote
// ====================================================

export interface Vote_vote {
  __typename: "DiscussionVote";
  id: string;
  isUpvote: boolean;
  userId: string;
}

export interface Vote {
  vote: Vote_vote;
}

export interface VoteVariables {
  discussionId: string;
  isUpvote?: boolean | null;
}
