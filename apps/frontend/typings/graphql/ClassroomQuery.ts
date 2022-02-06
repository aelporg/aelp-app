/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ClassroomRole } from "./globalTypes";

// ====================================================
// GraphQL query operation: ClassroomQuery
// ====================================================

export interface ClassroomQuery_classroom_members_user {
  __typename: "User";
  id: string;
  name: string | null;
}

export interface ClassroomQuery_classroom_members {
  __typename: "ClassroomMember";
  user: ClassroomQuery_classroom_members_user;
  classroomRole: ClassroomRole;
}

export interface ClassroomQuery_classroom {
  __typename: "Classroom";
  id: string;
  name: string;
  subject: string | null;
  section: string | null;
  createdAt: any;
  updatedAt: any;
  members: ClassroomQuery_classroom_members[] | null;
}

export interface ClassroomQuery {
  classroom: ClassroomQuery_classroom | null;
}

export interface ClassroomQueryVariables {
  id: string;
}
