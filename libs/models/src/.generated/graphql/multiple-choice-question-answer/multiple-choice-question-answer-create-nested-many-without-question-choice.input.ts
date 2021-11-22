import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerCreateWithoutQuestionChoiceInput } from './multiple-choice-question-answer-create-without-question-choice.input';
import { MultipleChoiceQuestionAnswerCreateOrConnectWithoutQuestionChoiceInput } from './multiple-choice-question-answer-create-or-connect-without-question-choice.input';
import { MultipleChoiceQuestionAnswerCreateManyQuestionChoiceInputEnvelope } from './multiple-choice-question-answer-create-many-question-choice-input-envelope.input';
import { MultipleChoiceQuestionAnswerWhereUniqueInput } from './multiple-choice-question-answer-where-unique.input';

@InputType()
export class MultipleChoiceQuestionAnswerCreateNestedManyWithoutQuestionChoiceInput {

    @Field(() => [MultipleChoiceQuestionAnswerCreateWithoutQuestionChoiceInput], {nullable:true})
    create?: Array<MultipleChoiceQuestionAnswerCreateWithoutQuestionChoiceInput>;

    @Field(() => [MultipleChoiceQuestionAnswerCreateOrConnectWithoutQuestionChoiceInput], {nullable:true})
    connectOrCreate?: Array<MultipleChoiceQuestionAnswerCreateOrConnectWithoutQuestionChoiceInput>;

    @Field(() => MultipleChoiceQuestionAnswerCreateManyQuestionChoiceInputEnvelope, {nullable:true})
    createMany?: MultipleChoiceQuestionAnswerCreateManyQuestionChoiceInputEnvelope;

    @Field(() => [MultipleChoiceQuestionAnswerWhereUniqueInput], {nullable:true})
    connect?: Array<MultipleChoiceQuestionAnswerWhereUniqueInput>;
}
