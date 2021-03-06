/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ClassroomRole } from "./globalTypes";

// ====================================================
// GraphQL query operation: MyClassroomsQuery
// ====================================================

export interface MyClassroomsQuery_classrooms_members_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface MyClassroomsQuery_classrooms_members {
  __typename: "ClassroomMember";
  user: MyClassroomsQuery_classrooms_members_user;
  classroomRole: ClassroomRole;
}

export interface MyClassroomsQuery_classrooms_assessments {
  __typename: "Assessment";
  title: string;
}

export interface MyClassroomsQuery_classrooms {
  __typename: "Classroom";
  id: string;
  createdAt: any;
  updatedAt: any;
  name: string;
  subject: string | null;
  section: string | null;
  inviteCode: string | null;
  members: MyClassroomsQuery_classrooms_members[] | null;
  assessments: MyClassroomsQuery_classrooms_assessments[] | null;
}

export interface MyClassroomsQuery {
  classrooms: MyClassroomsQuery_classrooms[];
}
