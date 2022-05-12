/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AssessmentType, ClassroomRole, QuestionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: ClassroomAssessment
// ====================================================

export interface ClassroomAssessment_assessment_answer {
  __typename: "AssessmentAnswer";
  userId: string;
  reviewed: boolean;
  recPoints: number | null;
  updatedAt: any;
  createdAt: any;
}

export interface ClassroomAssessment_assessment_classroom_members_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface ClassroomAssessment_assessment_classroom_members {
  __typename: "ClassroomMember";
  user: ClassroomAssessment_assessment_classroom_members_user;
  classroomRole: ClassroomRole;
}

export interface ClassroomAssessment_assessment_classroom {
  __typename: "Classroom";
  members: ClassroomAssessment_assessment_classroom_members[] | null;
}

export interface ClassroomAssessment_assessment_answers_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface ClassroomAssessment_assessment_answers {
  __typename: "AssessmentAnswer";
  user: ClassroomAssessment_assessment_answers_user;
  recPoints: number | null;
  updatedAt: any;
  createdAt: any;
}

export interface ClassroomAssessment_assessment_questions_multipleChoiceQuestion_choices {
  __typename: "MultipleChoiceQuestionChoice";
  id: string;
  choice: string;
}

export interface ClassroomAssessment_assessment_questions_multipleChoiceQuestion {
  __typename: "MultipleChoiceQuestion";
  id: string;
  description: string;
  choices: ClassroomAssessment_assessment_questions_multipleChoiceQuestion_choices[] | null;
}

export interface ClassroomAssessment_assessment_questions_programmingQuestion {
  __typename: "ProgrammingQuestion";
  id: string;
  title: string;
}

export interface ClassroomAssessment_assessment_questions_answers_programmingQuestionAnswer {
  __typename: "ProgrammingQuestionAnswer";
  envirnmentId: string;
  id: string;
}

export interface ClassroomAssessment_assessment_questions_answers_multipleChoiceQuestionAnswer {
  __typename: "MultipleChoiceQuestionAnswer";
  id: string;
  questionChoiceId: string;
}

export interface ClassroomAssessment_assessment_questions_answers {
  __typename: "QuestionAnswer";
  id: string;
  questionId: string;
  programmingQuestionAnswer: ClassroomAssessment_assessment_questions_answers_programmingQuestionAnswer;
  multipleChoiceQuestionAnswer: ClassroomAssessment_assessment_questions_answers_multipleChoiceQuestionAnswer;
}

export interface ClassroomAssessment_assessment_questions {
  __typename: "Question";
  id: string;
  questionType: QuestionType;
  multipleChoiceQuestion: ClassroomAssessment_assessment_questions_multipleChoiceQuestion | null;
  programmingQuestion: ClassroomAssessment_assessment_questions_programmingQuestion | null;
  answers: ClassroomAssessment_assessment_questions_answers[] | null;
  points: number;
}

export interface ClassroomAssessment_assessment {
  __typename: "Assessment";
  id: string;
  title: string;
  assessmentType: AssessmentType;
  startTime: any;
  endTime: any | null;
  description: string;
  submitAfterEnd: boolean;
  totalPoints: number;
  answer: ClassroomAssessment_assessment_answer | null;
  classroom: ClassroomAssessment_assessment_classroom | null;
  answers: ClassroomAssessment_assessment_answers[] | null;
  questions: ClassroomAssessment_assessment_questions[] | null;
}

export interface ClassroomAssessment {
  assessment: ClassroomAssessment_assessment;
}

export interface ClassroomAssessmentVariables {
  id: string;
}
