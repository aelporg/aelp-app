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

export interface AssessmentQuestions_questions_answers_programmingQuestionAnswer {
  __typename: "ProgrammingQuestionAnswer";
  envirnmentId: string;
  id: string;
}

export interface AssessmentQuestions_questions_answers_multipleChoiceQuestionAnswer {
  __typename: "MultipleChoiceQuestionAnswer";
  id: string;
  questionChoiceId: string;
}

export interface AssessmentQuestions_questions_answers {
  __typename: "QuestionAnswer";
  id: string;
  questionId: string;
  programmingQuestionAnswer: AssessmentQuestions_questions_answers_programmingQuestionAnswer | null;
  multipleChoiceQuestionAnswer: AssessmentQuestions_questions_answers_multipleChoiceQuestionAnswer | null;
}

export interface AssessmentQuestions_questions {
  __typename: "Question";
  id: string;
  questionType: QuestionType;
  multipleChoiceQuestion: AssessmentQuestions_questions_multipleChoiceQuestion | null;
  programmingQuestion: AssessmentQuestions_questions_programmingQuestion | null;
  answers: AssessmentQuestions_questions_answers[] | null;
  points: number;
}

export interface AssessmentQuestions {
  __typename: "Assessment";
  questions: AssessmentQuestions_questions[] | null;
}
