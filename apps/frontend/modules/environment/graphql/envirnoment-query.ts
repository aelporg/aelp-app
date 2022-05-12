import { gql } from "@apollo/client";

export const ENVIRNOMENT_QUERY = gql`
  query EnvironmentQuery($id: String!) {
    envirnoment(id: $id) {
      id
      submitted
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
      answer {
        id
        baseAnswer {
          id
          question {
            id
            assessmentId
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
      language {
        id
        name
        editorConfigName
      }
    }
  }
`
