import { gql } from "@apollo/client";

export const ENVIRONMENT_SUBMIT_MUTATION = gql`
mutation EnvironmentSubmitMutation($submitEnvId: ID!) {
  submitEnv(id: $submitEnvId)
}
`
