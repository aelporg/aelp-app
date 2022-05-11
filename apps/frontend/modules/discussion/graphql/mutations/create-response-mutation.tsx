import { gql } from "@apollo/client";

export const CREATE_RESPONSE_MUTATION = gql`
  mutation CreateDiscussionResponse(
    $response: String!
    $discussionId: String!
  ) {
    createDiscussionResponse(response: $response, discussionId: $discussionId) {
      id
    }
  }
`
