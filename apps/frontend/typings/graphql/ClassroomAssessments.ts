/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AssessmentType } from "./globalTypes";

// ====================================================
// GraphQL query operation: ClassroomAssessments
// ====================================================

export interface ClassroomAssessments_assessments_answer {
  __typename: "AssessmentAnswer";
  userId: string;
  reviewed: boolean;
  recPoints: number | null;
  updatedAt: any;
  createdAt: any;
}

export interface ClassroomAssessments_assessments {
  __typename: "Assessment";
  id: string;
  title: string;
  assessmentType: AssessmentType;
  startTime: any;
  endTime: any | null;
  description: string;
  submitAfterEnd: boolean;
  totalPoints: number;
  answer: ClassroomAssessments_assessments_answer | null;
}

export interface ClassroomAssessments {
  assessments: ClassroomAssessments_assessments[];
}

export interface ClassroomAssessmentsVariables {
  id: string;
}
