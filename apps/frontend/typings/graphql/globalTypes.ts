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

export interface CreateClassroom {
  name: string;
  subject?: string | null;
  section?: string | null;
}

export interface UserRegisterDtoWithPassword {
  password: string;
  confirmPassword: string;
  email: string;
  agreeTerms: boolean;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
