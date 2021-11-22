import { registerEnumType } from '@nestjs/graphql';

export enum ClassroomScalarFieldEnum {
    id = "id",
    name = "name",
    subject = "subject",
    section = "section",
    inviteCode = "inviteCode",
    updatedAt = "updatedAt",
    createdAt = "createdAt"
}


registerEnumType(ClassroomScalarFieldEnum, { name: 'ClassroomScalarFieldEnum', description: undefined })
