import { gql } from "@apollo/client";

export const VOTE_ON_DISCUSSION_MUTATION = gql`
  mutation Vote($discussionId: String!, $isUpvote: Boolean) {
    vote(id: $discussionId, isUpvote: $isUpvote) {
      id
      isUpvote
      userId
    }
  }
`
