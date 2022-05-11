import { gql } from '@apollo/client'
import { REGULAR_DISCUSSION_FRAGMENT } from '../fragments/dicussion-fragment'

export const DISCUSSION_QUERY = gql`
  ${REGULAR_DISCUSSION_FRAGMENT}
  query DiscussionQuery($id: String!) {
    discussion(id: $id) {
      ...RegularDiscussion
      responces {
        id
        responce
        createdAt
        user {
          id
          name
        }
      }
    }
  }
`
