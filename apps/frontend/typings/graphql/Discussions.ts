/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Discussions
// ====================================================

export interface Discussions_discussions_tags {
  __typename: "DiscussionTag";
  id: string;
  name: string;
}

export interface Discussions_discussions_user {
  __typename: "User";
  id: string;
  userName: string;
}

export interface Discussions_discussions_votes {
  __typename: "DiscussionVote";
  id: string;
  isUpvote: boolean;
  userId: string;
}

export interface Discussions_discussions {
  __typename: "Discussion";
  id: string;
  title: string;
  description: string | null;
  createdAt: any;
  updatedAt: any;
  tags: Discussions_discussions_tags[] | null;
  user: Discussions_discussions_user;
  votesCount: number;
  votes: Discussions_discussions_votes[];
}

export interface Discussions {
  discussions: Discussions_discussions[];
}

export interface DiscussionsVariables {
  take?: number | null;
}
