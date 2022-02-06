/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { JoinClassroomInput } from './globalTypes'

// ====================================================
// GraphQL mutation operation: JoinClassRoomMutation
// ====================================================

export interface JoinClassRoomMutation_joinClassroom {
  __typename: 'Classroom'
  name: string
  subject: string | null
  section: string | null
  createdAt: any
  updatedAt: any
}

export interface JoinClassRoomMutation {
  joinClassroom: JoinClassRoomMutation_joinClassroom
}

export interface JoinClassRoomMutationVariables {
  data: JoinClassroomInput
}
