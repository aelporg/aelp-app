import { gql } from "@apollo/client";
import { CLASSROOM_MEMBERS_FRAGMENT } from "@modules/classroom/graphql/classroom-query"

export const ASSESSMENT_FRAGMENT = gql`

${CLASSROOM_MEMBERS_FRAGMENT}
  fragment AssessmentInfo on Assessment {
    id
    title
    assessmentType
    startTime
    endTime
    description
    submitAfterEnd
    totalPoints
    answer {
      userId
      reviewed
      recPoints
      updatedAt
      createdAt
    }
    classroom {
      ...ClassroomMembers
    }
    answers {
      user {
        id
        name
      }
      recPoints
      updatedAt
      createdAt
    }
  }
`

export const ASSESSMENT_QUESTIONS_FRAGMENT = gql`
fragment AssessmentQuestions on Assessment {
  questions {
    id
    questionType
    multipleChoiceQuestion {
      id
      description
      choices {
        id
        choice
      }
    }
    programmingQuestion {
      id
      title
    }
    answers {
      id
      questionId
      programmingQuestionAnswer {
        envirnmentId
        id
      }
      multipleChoiceQuestionAnswer {
        id
        questionChoiceId
      }
    }
    points
  }
}
`

export const ASSESSMENTS_QUERY = gql`
${ASSESSMENT_FRAGMENT}
query ClassroomAssessments($id: String!) {
  assessments(classroomId: $id) {
    ...AssessmentInfo
  }
}
`

export const ASSESSMENT_QUERY = gql`
${ASSESSMENT_FRAGMENT}
${ASSESSMENT_QUESTIONS_FRAGMENT}
query ClassroomAssessment($id: String!) {
  assessment(id: $id) {
    ...AssessmentInfo
    ...AssessmentQuestions
  }
}
`
