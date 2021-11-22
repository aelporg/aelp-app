import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerCreateWithoutQuestionInput } from './question-answer-create-without-question.input';
import { QuestionAnswerCreateOrConnectWithoutQuestionInput } from './question-answer-create-or-connect-without-question.input';
import { QuestionAnswerUpsertWithWhereUniqueWithoutQuestionInput } from './question-answer-upsert-with-where-unique-without-question.input';
import { QuestionAnswerCreateManyQuestionInputEnvelope } from './question-answer-create-many-question-input-envelope.input';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';
import { QuestionAnswerUpdateWithWhereUniqueWithoutQuestionInput } from './question-answer-update-with-where-unique-without-question.input';
import { QuestionAnswerUpdateManyWithWhereWithoutQuestionInput } from './question-answer-update-many-with-where-without-question.input';
import { QuestionAnswerScalarWhereInput } from './question-answer-scalar-where.input';

@InputType()
export class QuestionAnswerUpdateManyWithoutQuestionInput {

    @Field(() => [QuestionAnswerCreateWithoutQuestionInput], {nullable:true})
    create?: Array<QuestionAnswerCreateWithoutQuestionInput>;

    @Field(() => [QuestionAnswerCreateOrConnectWithoutQuestionInput], {nullable:true})
    connectOrCreate?: Array<QuestionAnswerCreateOrConnectWithoutQuestionInput>;

    @Field(() => [QuestionAnswerUpsertWithWhereUniqueWithoutQuestionInput], {nullable:true})
    upsert?: Array<QuestionAnswerUpsertWithWhereUniqueWithoutQuestionInput>;

    @Field(() => QuestionAnswerCreateManyQuestionInputEnvelope, {nullable:true})
    createMany?: QuestionAnswerCreateManyQuestionInputEnvelope;

    @Field(() => [QuestionAnswerWhereUniqueInput], {nullable:true})
    set?: Array<QuestionAnswerWhereUniqueInput>;

    @Field(() => [QuestionAnswerWhereUniqueInput], {nullable:true})
    disconnect?: Array<QuestionAnswerWhereUniqueInput>;

    @Field(() => [QuestionAnswerWhereUniqueInput], {nullable:true})
    delete?: Array<QuestionAnswerWhereUniqueInput>;

    @Field(() => [QuestionAnswerWhereUniqueInput], {nullable:true})
    connect?: Array<QuestionAnswerWhereUniqueInput>;

    @Field(() => [QuestionAnswerUpdateWithWhereUniqueWithoutQuestionInput], {nullable:true})
    update?: Array<QuestionAnswerUpdateWithWhereUniqueWithoutQuestionInput>;

    @Field(() => [QuestionAnswerUpdateManyWithWhereWithoutQuestionInput], {nullable:true})
    updateMany?: Array<QuestionAnswerUpdateManyWithWhereWithoutQuestionInput>;

    @Field(() => [QuestionAnswerScalarWhereInput], {nullable:true})
    deleteMany?: Array<QuestionAnswerScalarWhereInput>;
}
