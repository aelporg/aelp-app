import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionType } from '../prisma/question-type.enum';
import { Int } from '@nestjs/graphql';
import { MultipleChoiceQuestionCreateNestedOneWithoutBaseQuestionInput } from '../multiple-choice-question/multiple-choice-question-create-nested-one-without-base-question.input';
import { ProgrammingQuestionCreateNestedOneWithoutBaseQuestionInput } from '../programming-question/programming-question-create-nested-one-without-base-question.input';
import { QuestionAnswerCreateNestedManyWithoutQuestionInput } from '../question-answer/question-answer-create-nested-many-without-question.input';

@InputType()
export class QuestionCreateWithoutAssessmentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => QuestionType, {nullable:false})
    questionType!: keyof typeof QuestionType;

    @Field(() => Int, {nullable:false})
    points!: number;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => MultipleChoiceQuestionCreateNestedOneWithoutBaseQuestionInput, {nullable:true})
    multipleChoiceQuestion?: MultipleChoiceQuestionCreateNestedOneWithoutBaseQuestionInput;

    @Field(() => ProgrammingQuestionCreateNestedOneWithoutBaseQuestionInput, {nullable:true})
    programmingQuestion?: ProgrammingQuestionCreateNestedOneWithoutBaseQuestionInput;

    @Field(() => QuestionAnswerCreateNestedManyWithoutQuestionInput, {nullable:true})
    answers?: QuestionAnswerCreateNestedManyWithoutQuestionInput;
}
