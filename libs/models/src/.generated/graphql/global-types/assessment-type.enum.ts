import { registerEnumType } from '@nestjs/graphql';

export enum AssessmentType {
    EXAM = "EXAM",
    ASSIGNMENT = "ASSIGNMENT"
}


registerEnumType(AssessmentType, { name: 'AssessmentType', description: undefined })
