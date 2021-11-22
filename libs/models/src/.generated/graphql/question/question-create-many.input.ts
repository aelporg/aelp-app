import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionType } from '../prisma/question-type.enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class QuestionCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => QuestionType, {nullable:false})
    questionType!: keyof typeof QuestionType;

    @Field(() => Int, {nullable:false})
    points!: number;

    @Field(() => String, {nullable:true})
    multipleChoiceQuestionId?: string;

    @Field(() => String, {nullable:true})
    programmingQuestionId?: string;

    @Field(() => String, {nullable:true})
    assessmentId?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
