import { registerEnumType } from '@nestjs/graphql';

export enum ClassroomRole {
    OWNER = "OWNER",
    STUDENT = "STUDENT",
    INSTRUCTOR = "INSTRUCTOR",
    TA = "TA"
}


registerEnumType(ClassroomRole, { name: 'ClassroomRole', description: undefined })
