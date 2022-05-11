/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DiscussionQuery
// ====================================================

export interface DiscussionQuery_discussion_tags {
  __typename: "DiscussionTag";
  id: string;
  name: string;
}

export interface DiscussionQuery_discussion_user {
  __typename: "User";
  id: string;
  userName: string;
}

export interface DiscussionQuery_discussion_votes {
  __typename: "DiscussionVote";
  id: string;
  isUpvote: boolean;
  userId: string;
}

export interface DiscussionQuery_discussion_responces_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface DiscussionQuery_discussion_responces {
  __typename: "DiscussionResponce";
  id: string;
  responce: string;
  createdAt: any;
  user: DiscussionQuery_discussion_responces_user;
}

export interface DiscussionQuery_discussion {
  __typename: "Discussion";
  id: string;
  title: string;
  description: string | null;
  createdAt: any;
  updatedAt: any;
  tags: DiscussionQuery_discussion_tags[] | null;
  user: DiscussionQuery_discussion_user;
  votesCount: number;
  votes: DiscussionQuery_discussion_votes[];
  responces: DiscussionQuery_discussion_responces[];
}

export interface DiscussionQuery {
  discussion: DiscussionQuery_discussion | null;
}

export interface DiscussionQueryVariables {
  id: string;
}
