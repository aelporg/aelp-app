/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProgrammingQuestionType, EnvironmentPermissionLevel } from "./globalTypes";

// ====================================================
// GraphQL query operation: EnvironmentQuery
// ====================================================

export interface EnvironmentQuery_envirnoment_files_language {
  __typename: "Language";
  id: string;
  name: string;
  editorConfigName: string;
}

export interface EnvironmentQuery_envirnoment_files {
  __typename: "File";
  id: string;
  name: string;
  data: string;
  language: EnvironmentQuery_envirnoment_files_language | null;
}

export interface EnvironmentQuery_envirnoment_answer_baseAnswer_question_programmingQuestion_evaluationCriterias {
  __typename: "EvaluationCriteria";
  name: string;
}

export interface EnvironmentQuery_envirnoment_answer_baseAnswer_question_programmingQuestion {
  __typename: "ProgrammingQuestion";
  id: string;
  statementMrkdwn: string;
  programmingQuestionType: ProgrammingQuestionType;
  title: string;
  evaluationCriterias: EnvironmentQuery_envirnoment_answer_baseAnswer_question_programmingQuestion_evaluationCriterias[] | null;
}

export interface EnvironmentQuery_envirnoment_answer_baseAnswer_question {
  __typename: "Question";
  id: string;
  assessmentId: string | null;
  programmingQuestion: EnvironmentQuery_envirnoment_answer_baseAnswer_question_programmingQuestion | null;
}

export interface EnvironmentQuery_envirnoment_answer_baseAnswer {
  __typename: "QuestionAnswer";
  id: string;
  question: EnvironmentQuery_envirnoment_answer_baseAnswer_question;
}

export interface EnvironmentQuery_envirnoment_answer {
  __typename: "ProgrammingQuestionAnswer";
  id: string;
  baseAnswer: EnvironmentQuery_envirnoment_answer_baseAnswer;
}

export interface EnvironmentQuery_envirnoment_permissions_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface EnvironmentQuery_envirnoment_permissions {
  __typename: "EnvironmentPermission";
  user: EnvironmentQuery_envirnoment_permissions_user;
  permission: EnvironmentPermissionLevel;
}

export interface EnvironmentQuery_envirnoment_language {
  __typename: "Language";
  id: string;
  name: string;
  editorConfigName: string;
}

export interface EnvironmentQuery_envirnoment {
  __typename: "Environment";
  id: string;
  files: EnvironmentQuery_envirnoment_files[] | null;
  answer: EnvironmentQuery_envirnoment_answer | null;
  scratchPadData: string;
  createdAt: any;
  updatedAt: any;
  permissions: EnvironmentQuery_envirnoment_permissions[] | null;
  language: EnvironmentQuery_envirnoment_language;
}

export interface EnvironmentQuery {
  envirnoment: EnvironmentQuery_envirnoment | null;
}

export interface EnvironmentQueryVariables {
  id: string;
}
