/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AssessmentType } from "./globalTypes";

// ====================================================
// GraphQL fragment: AssessmentInfo
// ====================================================

export interface AssessmentInfo_answer {
  __typename: "AssessmentAnswer";
  userId: string;
  reviewed: boolean;
  recPoints: number | null;
  updatedAt: any;
  createdAt: any;
}

export interface AssessmentInfo {
  __typename: "Assessment";
  id: string;
  title: string;
  assessmentType: AssessmentType;
  startTime: any;
  endTime: any | null;
  description: string;
  submitAfterEnd: boolean;
  totalPoints: number;
  answer: AssessmentInfo_answer | null;
}
