import { gql } from '@apollo/client'

export const ASSESSMENT_CREATE_MUTATION = gql`
  mutation CreateAssessmentMutation($data: AssessmentCreateInput!) {
    createAssessment(data: $data) {
      id
    }
  }
`
