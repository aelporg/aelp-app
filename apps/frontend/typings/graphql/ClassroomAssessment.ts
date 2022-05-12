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

export interface ClassroomAssessment_assessment_answers_questionsSubmissions_programmingQuestionAnswer_evaluationResults {
  __typename: "EvaluationResult";
  id: string;
  evaulationPoints: number;
}

export interface ClassroomAssessment_assessment_answers_questionsSubmissions_programmingQuestionAnswer {
  __typename: "ProgrammingQuestionAnswer";
  evaluationResults: ClassroomAssessment_assessment_answers_questionsSubmissions_programmingQuestionAnswer_evaluationResults[] | null;
}

export interface ClassroomAssessment_assessment_answers_questionsSubmissions_multipleChoiceQuestionAnswer {
  __typename: "MultipleChoiceQuestionAnswer";
  id: string;
  questionChoiceId: string;
}

export interface ClassroomAssessment_assessment_answers_questionsSubmissions {
  __typename: "QuestionAnswer";
  id: string;
  points: number | null;
  questionId: string;
  programmingQuestionAnswer: ClassroomAssessment_assessment_answers_questionsSubmissions_programmingQuestionAnswer | null;
  multipleChoiceQuestionAnswer: ClassroomAssessment_assessment_answers_questionsSubmissions_multipleChoiceQuestionAnswer | null;
}

export interface ClassroomAssessment_assessment_answers {
  __typename: "AssessmentAnswer";
  user: ClassroomAssessment_assessment_answers_user;
  recPoints: number | null;
  updatedAt: any;
  createdAt: any;
  questionsSubmissions: ClassroomAssessment_assessment_answers_questionsSubmissions[] | null;
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

export interface ClassroomAssessment_assessment_questions {
  __typename: "Question";
  id: string;
  questionType: QuestionType;
  multipleChoiceQuestion: ClassroomAssessment_assessment_questions_multipleChoiceQuestion | null;
  programmingQuestion: ClassroomAssessment_assessment_questions_programmingQuestion | null;
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
