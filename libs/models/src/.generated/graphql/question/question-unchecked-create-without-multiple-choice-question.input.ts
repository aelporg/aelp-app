import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionType } from '../prisma/question-type.enum';
import { Int } from '@nestjs/graphql';
import { QuestionAnswerUncheckedCreateNestedManyWithoutQuestionInput } from '../question-answer/question-answer-unchecked-create-nested-many-without-question.input';

@InputType()
export class QuestionUncheckedCreateWithoutMultipleChoiceQuestionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => QuestionType, {nullable:false})
    questionType!: keyof typeof QuestionType;

    @Field(() => Int, {nullable:false})
    points!: number;

    @Field(() => String, {nullable:true})
    programmingQuestionId?: string;

    @Field(() => String, {nullable:true})
    assessmentId?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => QuestionAnswerUncheckedCreateNestedManyWithoutQuestionInput, {nullable:true})
    answers?: QuestionAnswerUncheckedCreateNestedManyWithoutQuestionInput;
}
