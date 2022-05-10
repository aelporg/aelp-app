import { gql } from "@apollo/client";

export const ENVIRONMENT_RUN_TEST_CASES_MUTATION = gql`
  mutation EnvironmentRunTestCasesMutation($id: ID!) {
    runTestCases(id: $id) {
      status
      criteria {
        name
        type
        inputOutputEvalCrit {
          inputs
          outputs
        }
      }
      output {
        compile {
          output
        }
        run {
          output
          stderr
          stdout
        }
      }
    }
  }
`
