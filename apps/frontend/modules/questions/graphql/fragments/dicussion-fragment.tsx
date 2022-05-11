import { gql } from '@apollo/client'

export const REGULAR_DISCUSSION_FRAGMENT = gql`
  fragment RegularDicussion on Discussion {
    id
    title
    description
    createdAt
    updatedAt
    tags {
      id
      name
    }
  }
`
