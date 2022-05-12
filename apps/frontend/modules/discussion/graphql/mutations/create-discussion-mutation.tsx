import { gql } from "@apollo/client";

export const CREATE_DISCUSSION_MUTATION = gql`
  mutation CreateDiscussionMutation($data: CreateDiscussionInput!) {
    createDiscussion(data: $data) {
      id
    }
  }
`
