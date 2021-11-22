import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentType } from '../prisma/assessment-type.enum';
import { Int } from '@nestjs/graphql';
import { ClassroomCreateNestedOneWithoutAssessmentsInput } from '../classroom/classroom-create-nested-one-without-assessments.input';
import { AssessmentAnswerCreateNestedManyWithoutAssessmentInput } from '../assessment-answer/assessment-answer-create-nested-many-without-assessment.input';
import { CompetitionCreateNestedOneWithoutAssessmentInput } from '../competition/competition-create-nested-one-without-assessment.input';

@InputType()
export class AssessmentCreateWithoutQuestionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => AssessmentType, {nullable:false})
    assessmentType!: keyof typeof AssessmentType;

    @Field(() => Date, {nullable:true})
    startTime?: Date | string;

    @Field(() => Date, {nullable:true})
    endTime?: Date | string;

    @Field(() => Boolean, {nullable:true})
    submitAfterEnd?: boolean;

    @Field(() => Int, {nullable:true})
    totalPoints?: number;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ClassroomCreateNestedOneWithoutAssessmentsInput, {nullable:true})
    classroom?: ClassroomCreateNestedOneWithoutAssessmentsInput;

    @Field(() => AssessmentAnswerCreateNestedManyWithoutAssessmentInput, {nullable:true})
    answers?: AssessmentAnswerCreateNestedManyWithoutAssessmentInput;

    @Field(() => CompetitionCreateNestedOneWithoutAssessmentInput, {nullable:true})
    competition?: CompetitionCreateNestedOneWithoutAssessmentInput;
}
