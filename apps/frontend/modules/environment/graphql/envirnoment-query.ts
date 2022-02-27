import { gql } from "@apollo/client";

export const ENVIRNOMENT_QUERY = gql`
  query EnvironmentQuery($id: String!) {
    envirnoment(id: $id) {
      id
      files {
        name
        data
      }
      answers {
        id
        baseAnswer {
          id
          question {
            id
            programmingQuestion {
              id
              statementMrkdwn
              programmingQuestionType
              title
              evaluationCriterias {
                name
              }
            }
          }
        }
      }
      scratchPadData
      createdAt
      updatedAt
      permissions {
        user {
          id
          name
        }
        permission
      }
    }
  }
`
