/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AssessmentType, ClassroomRole } from "./globalTypes";

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

export interface AssessmentInfo_classroom_members_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface AssessmentInfo_classroom_members {
  __typename: "ClassroomMember";
  user: AssessmentInfo_classroom_members_user;
  classroomRole: ClassroomRole;
}

export interface AssessmentInfo_classroom {
  __typename: "Classroom";
  members: AssessmentInfo_classroom_members[] | null;
}

export interface AssessmentInfo_answers_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface AssessmentInfo_answers {
  __typename: "AssessmentAnswer";
  user: AssessmentInfo_answers_user;
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
  classroom: AssessmentInfo_classroom | null;
  answers: AssessmentInfo_answers[] | null;
}
