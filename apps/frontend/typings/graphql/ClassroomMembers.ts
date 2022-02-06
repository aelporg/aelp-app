/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ClassroomRole } from "./globalTypes";

// ====================================================
// GraphQL fragment: ClassroomMembers
// ====================================================

export interface ClassroomMembers_members_user {
  __typename: "User";
  id: string;
  name: string | null;
}

export interface ClassroomMembers_members {
  __typename: "ClassroomMember";
  user: ClassroomMembers_members_user;
  classroomRole: ClassroomRole;
}

export interface ClassroomMembers {
  __typename: "Classroom";
  members: ClassroomMembers_members[] | null;
}
