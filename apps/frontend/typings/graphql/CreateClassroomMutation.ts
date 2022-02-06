/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateClassroom } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateClassroomMutation
// ====================================================

export interface CreateClassroomMutation_createClassroom {
  __typename: "Classroom";
  name: string;
  subject: string | null;
  section: string | null;
  inviteCode: string;
  createdAt: any;
  updatedAt: any;
}

export interface CreateClassroomMutation {
  createClassroom: CreateClassroomMutation_createClassroom;
}

export interface CreateClassroomMutationVariables {
  data: CreateClassroom;
}
