import { registerEnumType } from '@nestjs/graphql';

export enum ClassroomMemberScalarFieldEnum {
    classroomId = "classroomId",
    userId = "userId",
    classroomRole = "classroomRole",
    updatedAt = "updatedAt",
    createdAt = "createdAt"
}


registerEnumType(ClassroomMemberScalarFieldEnum, { name: 'ClassroomMemberScalarFieldEnum', description: undefined })
