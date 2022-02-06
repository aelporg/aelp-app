import { gql } from '@apollo/client'

export const ME_QUERY = gql`
  query MeQuery {
    me {
      id
      userName
      shortName
      name
      email
    }
  }
`
