import { gql } from "@apollo/client";

export const CREATE_ENVIRNOMENT_MUTATION = gql`
mutation CreateEnvironment($questionId: String!) {
  createEnvironment(questionId: $questionId) {
    id
  }
}`
