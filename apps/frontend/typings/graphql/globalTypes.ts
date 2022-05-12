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
}

export enum EnvironmentPermissionLevel {
  OWNER = "OWNER",
  READ = "READ",
  READ_WRITE = "READ_WRITE",
}

export enum EvaluationCriteriaType {
  INPUT_OUTPUT = "INPUT_OUTPUT",
  MANUAL = "MANUAL",
  PLAG_CHECK = "PLAG_CHECK",
}

export enum ProgrammingQuestionType {
  MULTIPLE_FILE = "MULTIPLE_FILE",
  SINGLE_FILE = "SINGLE_FILE",
}

export enum QuestionType {
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  PROGRAMMING = "PROGRAMMING",
}

export interface AssessmentCreateInput {
  title: string;
  description: string;
  assessmentType: AssessmentType;
  questions: QuestionCreateInput[];
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

export interface CreateDiscussionInput {
  title: string;
  description: string;
  tags?: string[] | null;
}

export interface DefaultCodeInput {
  defaultCode: string;
  languageId: string;
}

export interface EvaluationCriteriaCreateInput {
  name: string;
  type: EvaluationCriteriaType;
  totalPoints: number;
  inputOutputEvaluationCriteria?: InputOutputEvaluationCriteriaCreateInput | null;
}

export interface InputOutputEvaluationCriteriaCreateInput {
  inputs?: string | null;
  outputs?: string | null;
}

export interface JoinClassroomInput {
  inviteCode: string;
}

export interface MultipleChoiceQuestionInput {
  choices: string[];
  correctChoiceIndex: number;
  description: string;
}

export interface ProgrammingQuestionInput {
  programmingQuestionType: ProgrammingQuestionType;
  singleFileProgrammingQuestion?: SingleFileProgrammingQuestionInput | null;
  evaluationCriteria: EvaluationCriteriaCreateInput[];
  title: string;
  statementMrkdwn: string;
}

export interface QuestionCreateInput {
  questionType: QuestionType;
  points?: number | null;
  multipleChoiceQuestion?: MultipleChoiceQuestionInput | null;
  programmingQuestion?: ProgrammingQuestionInput | null;
}

export interface SingleFileProgrammingQuestionInput {
  defaultCodes: DefaultCodeInput[];
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
