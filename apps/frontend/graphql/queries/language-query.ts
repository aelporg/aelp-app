import { gql } from '@apollo/client'

export const LANGUAGE_QUERY = gql`
  query Languages {
    languages {
      id
      name
      editorConfigName
    }
  }
`
