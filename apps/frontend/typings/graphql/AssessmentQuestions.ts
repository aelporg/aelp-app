/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { QuestionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: AssessmentQuestions
// ====================================================

export interface AssessmentQuestions_questions_multipleChoiceQuestion_choices {
  __typename: "MultipleChoiceQuestionChoice";
  id: string;
  choice: string;
}

export interface AssessmentQuestions_questions_multipleChoiceQuestion {
  __typename: "MultipleChoiceQuestion";
  id: string;
  description: string;
  choices: AssessmentQuestions_questions_multipleChoiceQuestion_choices[] | null;
}

export interface AssessmentQuestions_questions_programmingQuestion {
  __typename: "ProgrammingQuestion";
  id: string;
  title: string;
}

export interface AssessmentQuestions_questions {
  __typename: "Question";
  id: string;
  questionType: QuestionType;
  multipleChoiceQuestion: AssessmentQuestions_questions_multipleChoiceQuestion | null;
  programmingQuestion: AssessmentQuestions_questions_programmingQuestion | null;
  points: number;
}

export interface AssessmentQuestions_answers_questionsSubmissions_programmingQuestionAnswer_evaluationResults {
  __typename: "EvaluationResult";
  id: string;
  evaulationPoints: number;
}

export interface AssessmentQuestions_answers_questionsSubmissions_programmingQuestionAnswer {
  __typename: "ProgrammingQuestionAnswer";
  evaluationResults: AssessmentQuestions_answers_questionsSubmissions_programmingQuestionAnswer_evaluationResults[] | null;
}

export interface AssessmentQuestions_answers_questionsSubmissions_multipleChoiceQuestionAnswer {
  __typename: "MultipleChoiceQuestionAnswer";
  id: string;
  questionChoiceId: string;
}

export interface AssessmentQuestions_answers_questionsSubmissions {
  __typename: "QuestionAnswer";
  id: string;
  points: number | null;
  questionId: string;
  programmingQuestionAnswer: AssessmentQuestions_answers_questionsSubmissions_programmingQuestionAnswer | null;
  multipleChoiceQuestionAnswer: AssessmentQuestions_answers_questionsSubmissions_multipleChoiceQuestionAnswer | null;
}

export interface AssessmentQuestions_answers_user {
  __typename: "User";
  name: string;
}

export interface AssessmentQuestions_answers {
  __typename: "AssessmentAnswer";
  questionsSubmissions: AssessmentQuestions_answers_questionsSubmissions[] | null;
  user: AssessmentQuestions_answers_user;
}

export interface AssessmentQuestions {
  __typename: "Assessment";
  questions: AssessmentQuestions_questions[] | null;
  answers: AssessmentQuestions_answers[] | null;
}
