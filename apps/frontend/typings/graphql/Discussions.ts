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

export interface Discussions_discussions {
  __typename: "Discussion";
  id: string;
  title: string;
  description: string | null;
  createdAt: any;
  updatedAt: any;
  tags: Discussions_discussions_tags[] | null;
}

export interface Discussions {
  discussions: Discussions_discussions[];
}

export interface DiscussionsVariables {
  take?: number | null;
}
