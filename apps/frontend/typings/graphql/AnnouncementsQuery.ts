/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AnnouncementsQuery
// ====================================================

export interface AnnouncementsQuery_classroom_announcements_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface AnnouncementsQuery_classroom_announcements {
  __typename: "ClassroomAnnouncement";
  id: string;
  content: string;
  createdAt: any;
  user: AnnouncementsQuery_classroom_announcements_user;
}

export interface AnnouncementsQuery_classroom {
  __typename: "Classroom";
  id: string;
  announcements: AnnouncementsQuery_classroom_announcements[];
}

export interface AnnouncementsQuery {
  classroom: AnnouncementsQuery_classroom | null;
}

export interface AnnouncementsQueryVariables {
  classroomId: string;
}
