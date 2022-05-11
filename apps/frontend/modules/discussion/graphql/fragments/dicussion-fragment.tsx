import { gql } from '@apollo/client'

export const REGULAR_DISCUSSION_FRAGMENT = gql`
  fragment RegularDiscussion on Discussion {
    id
    title
    description
    createdAt
    updatedAt
    tags {
      id
      name
    }
    user {
      id
      userName
    }
    votesCount
    votes {
      id
      isUpvote
      userId
    }
  }
`
