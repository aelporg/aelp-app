import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentType } from '../prisma/assessment-type.enum';
import { Int } from '@nestjs/graphql';
import { QuestionUncheckedCreateNestedManyWithoutAssessmentInput } from '../question/question-unchecked-create-nested-many-without-assessment.input';
import { AssessmentAnswerUncheckedCreateNestedManyWithoutAssessmentInput } from '../assessment-answer/assessment-answer-unchecked-create-nested-many-without-assessment.input';

@InputType()
export class AssessmentUncheckedCreateWithoutCompetitionInput {

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

    @Field(() => String, {nullable:true})
    classroomId?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => QuestionUncheckedCreateNestedManyWithoutAssessmentInput, {nullable:true})
    questions?: QuestionUncheckedCreateNestedManyWithoutAssessmentInput;

    @Field(() => AssessmentAnswerUncheckedCreateNestedManyWithoutAssessmentInput, {nullable:true})
    answers?: AssessmentAnswerUncheckedCreateNestedManyWithoutAssessmentInput;
}
