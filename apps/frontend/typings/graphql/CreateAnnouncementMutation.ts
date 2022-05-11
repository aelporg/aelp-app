/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ClassroomAnnoucementCreateInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateAnnouncementMutation
// ====================================================

export interface CreateAnnouncementMutation_createAnnouncement_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface CreateAnnouncementMutation_createAnnouncement_attachments {
  __typename: "AnnoucmentAttachment";
  id: string;
  file: string;
}

export interface CreateAnnouncementMutation_createAnnouncement {
  __typename: "ClassroomAnnouncement";
  id: string;
  user: CreateAnnouncementMutation_createAnnouncement_user;
  content: string;
  attachments: CreateAnnouncementMutation_createAnnouncement_attachments[] | null;
}

export interface CreateAnnouncementMutation {
  createAnnouncement: CreateAnnouncementMutation_createAnnouncement;
}

export interface CreateAnnouncementMutationVariables {
  data: ClassroomAnnoucementCreateInput;
}
