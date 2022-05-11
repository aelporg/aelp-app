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
  name: string;
}

export interface ClassroomDetails_members {
  __typename: "ClassroomMember";
  user: ClassroomDetails_members_user;
  classroomRole: ClassroomRole;
}

export interface ClassroomDetails {
  __typename: "Classroom";
  id: string;
  createdAt: any;
  updatedAt: any;
  name: string;
  subject: string | null;
  section: string | null;
  inviteCode: string | null;
  members: ClassroomDetails_members[] | null;
}
