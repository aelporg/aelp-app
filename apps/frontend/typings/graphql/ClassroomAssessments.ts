/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AssessmentType, ClassroomRole } from "./globalTypes";

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

export interface ClassroomAssessments_assessments_classroom_members_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface ClassroomAssessments_assessments_classroom_members {
  __typename: "ClassroomMember";
  user: ClassroomAssessments_assessments_classroom_members_user;
  classroomRole: ClassroomRole;
}

export interface ClassroomAssessments_assessments_classroom {
  __typename: "Classroom";
  members: ClassroomAssessments_assessments_classroom_members[] | null;
}

export interface ClassroomAssessments_assessments_answers_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface ClassroomAssessments_assessments_answers {
  __typename: "AssessmentAnswer";
  user: ClassroomAssessments_assessments_answers_user;
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
  classroom: ClassroomAssessments_assessments_classroom | null;
  answers: ClassroomAssessments_assessments_answers[] | null;
}

export interface ClassroomAssessments {
  assessments: ClassroomAssessments_assessments[];
}

export interface ClassroomAssessmentsVariables {
  id: string;
}
