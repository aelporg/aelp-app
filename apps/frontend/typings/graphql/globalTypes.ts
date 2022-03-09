/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AssessmentType {
  ASSIGNMENT = "ASSIGNMENT",
  EXAM = "EXAM",
}

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

export interface AssessmentCreateInput {
  title: string;
  description: string;
  assessmentType: AssessmentType;
  startTime?: any | null;
  endTime?: any | null;
  submitAfterEnd?: boolean | null;
  totalPoints?: number | null;
  classroomId?: string | null;
}

export interface ClassroomAnnoucementCreateInput {
  classroomId: string;
  content: string;
}

export interface ClassroomAnnouncementUpdateInput {
  content?: StringFieldUpdateOperationsInput | null;
}

export interface CreateClassroomInput {
  name: string;
  subject?: string | null;
  section?: string | null;
}

export interface JoinClassroomInput {
  inviteCode: string;
}

export interface StringFieldUpdateOperationsInput {
  set?: string | null;
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
