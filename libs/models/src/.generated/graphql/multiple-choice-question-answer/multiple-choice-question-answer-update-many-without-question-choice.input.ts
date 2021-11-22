import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionAnswerCreateWithoutQuestionChoiceInput } from './multiple-choice-question-answer-create-without-question-choice.input';
import { MultipleChoiceQuestionAnswerCreateOrConnectWithoutQuestionChoiceInput } from './multiple-choice-question-answer-create-or-connect-without-question-choice.input';
import { MultipleChoiceQuestionAnswerUpsertWithWhereUniqueWithoutQuestionChoiceInput } from './multiple-choice-question-answer-upsert-with-where-unique-without-question-choice.input';
import { MultipleChoiceQuestionAnswerCreateManyQuestionChoiceInputEnvelope } from './multiple-choice-question-answer-create-many-question-choice-input-envelope.input';
import { MultipleChoiceQuestionAnswerWhereUniqueInput } from './multiple-choice-question-answer-where-unique.input';
import { MultipleChoiceQuestionAnswerUpdateWithWhereUniqueWithoutQuestionChoiceInput } from './multiple-choice-question-answer-update-with-where-unique-without-question-choice.input';
import { MultipleChoiceQuestionAnswerUpdateManyWithWhereWithoutQuestionChoiceInput } from './multiple-choice-question-answer-update-many-with-where-without-question-choice.input';
import { MultipleChoiceQuestionAnswerScalarWhereInput } from './multiple-choice-question-answer-scalar-where.input';

@InputType()
export class MultipleChoiceQuestionAnswerUpdateManyWithoutQuestionChoiceInput {

    @Field(() => [MultipleChoiceQuestionAnswerCreateWithoutQuestionChoiceInput], {nullable:true})
    create?: Array<MultipleChoiceQuestionAnswerCreateWithoutQuestionChoiceInput>;

    @Field(() => [MultipleChoiceQuestionAnswerCreateOrConnectWithoutQuestionChoiceInput], {nullable:true})
    connectOrCreate?: Array<MultipleChoiceQuestionAnswerCreateOrConnectWithoutQuestionChoiceInput>;

    @Field(() => [MultipleChoiceQuestionAnswerUpsertWithWhereUniqueWithoutQuestionChoiceInput], {nullable:true})
    upsert?: Array<MultipleChoiceQuestionAnswerUpsertWithWhereUniqueWithoutQuestionChoiceInput>;

    @Field(() => MultipleChoiceQuestionAnswerCreateManyQuestionChoiceInputEnvelope, {nullable:true})
    createMany?: MultipleChoiceQuestionAnswerCreateManyQuestionChoiceInputEnvelope;

    @Field(() => [MultipleChoiceQuestionAnswerWhereUniqueInput], {nullable:true})
    set?: Array<MultipleChoiceQuestionAnswerWhereUniqueInput>;

    @Field(() => [MultipleChoiceQuestionAnswerWhereUniqueInput], {nullable:true})
    disconnect?: Array<MultipleChoiceQuestionAnswerWhereUniqueInput>;

    @Field(() => [MultipleChoiceQuestionAnswerWhereUniqueInput], {nullable:true})
    delete?: Array<MultipleChoiceQuestionAnswerWhereUniqueInput>;

    @Field(() => [MultipleChoiceQuestionAnswerWhereUniqueInput], {nullable:true})
    connect?: Array<MultipleChoiceQuestionAnswerWhereUniqueInput>;

    @Field(() => [MultipleChoiceQuestionAnswerUpdateWithWhereUniqueWithoutQuestionChoiceInput], {nullable:true})
    update?: Array<MultipleChoiceQuestionAnswerUpdateWithWhereUniqueWithoutQuestionChoiceInput>;

    @Field(() => [MultipleChoiceQuestionAnswerUpdateManyWithWhereWithoutQuestionChoiceInput], {nullable:true})
    updateMany?: Array<MultipleChoiceQuestionAnswerUpdateManyWithWhereWithoutQuestionChoiceInput>;

    @Field(() => [MultipleChoiceQuestionAnswerScalarWhereInput], {nullable:true})
    deleteMany?: Array<MultipleChoiceQuestionAnswerScalarWhereInput>;
}
