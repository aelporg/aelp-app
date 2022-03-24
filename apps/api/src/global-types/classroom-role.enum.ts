import { registerEnumType } from '@nestjs/graphql'

export enum ClassroomRole {
  OWNER = 'OWNER',
  STUDENT = 'STUDENT',
  INSTRUCTOR = 'INSTRUCTOR',
}

registerEnumType(ClassroomRole, {
  name: 'ClassroomRole',
  description: undefined,
})
