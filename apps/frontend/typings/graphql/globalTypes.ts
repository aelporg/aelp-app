/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ClassroomRole {
  INSTRUCTOR = "INSTRUCTOR",
  OWNER = "OWNER",
  STUDENT = "STUDENT",
  TA = "TA",
}

export enum EnvironmentPermissionLevel {
  OWNER = "OWNER",
  READ = "READ",
  READ_WRITE = "READ_WRITE",
}

export enum ProgrammingQuestionType {
  MULTIPLE_FILE = "MULTIPLE_FILE",
  SINGLE_FILE = "SINGLE_FILE",
}

export interface ClassroomAnnoucementCreateInput {
  classroomId: string;
  content: string;
}

export interface CreateClassroomInput {
  name: string;
  subject?: string | null;
  section?: string | null;
}

export interface JoinClassroomInput {
  inviteCode: string;
}

export interface UserRegisterInput {
  password: string;
  confirmPassword: string;
  email: string;
  agreeTerms: boolean;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
