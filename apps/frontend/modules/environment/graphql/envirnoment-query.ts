import { gql } from "@apollo/client";

export const ENVIRNOMENT_QUERY = gql`
  query EnvironmentQuery($id: String!) {
    envirnoment(id: $id) {
      id
      files {
        id
        name
        data
        language {
          id
          name
          editorConfigName
        }
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
