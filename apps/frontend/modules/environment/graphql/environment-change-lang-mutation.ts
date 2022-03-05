import { gql } from "@apollo/client";

export const ENVIRONEMENT_CHANGE_LANG_MUTATION = gql`
  mutation EnvironmentChangeLanguage($id: ID!, $languageId: ID!) {
    changeLanguage(id: $id, languageId: $languageId) {
      id
    }
  }
`
