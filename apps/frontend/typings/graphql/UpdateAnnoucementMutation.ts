/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ClassroomAnnouncementUpdateInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateAnnoucementMutation
// ====================================================

export interface UpdateAnnoucementMutation_updateAnnouncement {
  __typename: "ClassroomAnnouncement";
  id: string;
  content: string;
}

export interface UpdateAnnoucementMutation {
  updateAnnouncement: UpdateAnnoucementMutation_updateAnnouncement;
}

export interface UpdateAnnoucementMutationVariables {
  id: string;
  data: ClassroomAnnouncementUpdateInput;
}
