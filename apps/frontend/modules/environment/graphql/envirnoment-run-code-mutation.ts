import { gql } from "@apollo/client";

export const ENVIRONMENT_RUN_CODE_MUTATION = gql`
  mutation EnvironmentRunCodeMutation($id: ID!, $input: String) {
    runCode(id: $id, input: $input) {
      run {
        stderr
        stdout
        code
        output
      }
      compile {
        stderr
        stdout
        code
        output
      }
    }
  }
`
