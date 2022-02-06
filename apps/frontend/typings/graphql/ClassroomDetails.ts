/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ClassroomRole } from "./globalTypes";

// ====================================================
// GraphQL fragment: ClassroomDetails
// ====================================================

export interface ClassroomDetails_members_user {
  __typename: "User";
  id: string;
  name: string | null;
}

export interface ClassroomDetails_members {
  __typename: "ClassroomMember";
  user: ClassroomDetails_members_user;
  classroomRole: ClassroomRole;
}

export interface ClassroomDetails {
  __typename: "Classroom";
  id: string;
  name: string;
  subject: string | null;
  section: string | null;
  createdAt: any;
  updatedAt: any;
  members: ClassroomDetails_members[] | null;
}
