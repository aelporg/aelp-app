import { gql } from "@apollo/client";

export const ENVIRONMENT_RUN_CODE_MUTATION = gql`
  mutation EnvironmentRunCodeMutation($id: ID!) {
    runCode(id: $id)
  }
`
