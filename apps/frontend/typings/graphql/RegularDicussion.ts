/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RegularDicussion
// ====================================================

export interface RegularDicussion_tags {
  __typename: "DiscussionTag";
  id: string;
  name: string;
}

export interface RegularDicussion_user {
  __typename: "User";
  id: string;
  userName: string;
}

export interface RegularDicussion_votes {
  __typename: "DiscussionVote";
  id: string;
  isUpvote: boolean;
  userId: string;
}

export interface RegularDicussion {
  __typename: "Discussion";
  id: string;
  title: string;
  description: string | null;
  createdAt: any;
  updatedAt: any;
  tags: RegularDicussion_tags[] | null;
  user: RegularDicussion_user;
  votesCount: number;
  votes: RegularDicussion_votes[];
}
