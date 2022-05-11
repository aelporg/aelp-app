/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RegularDiscussion
// ====================================================

export interface RegularDiscussion_tags {
  __typename: "DiscussionTag";
  id: string;
  name: string;
}

export interface RegularDiscussion_user {
  __typename: "User";
  id: string;
  userName: string;
}

export interface RegularDiscussion_votes {
  __typename: "DiscussionVote";
  id: string;
  isUpvote: boolean;
  userId: string;
}

export interface RegularDiscussion {
  __typename: "Discussion";
  id: string;
  title: string;
  description: string | null;
  createdAt: any;
  updatedAt: any;
  tags: RegularDiscussion_tags[] | null;
  user: RegularDiscussion_user;
  votesCount: number;
  votes: RegularDiscussion_votes[];
}
