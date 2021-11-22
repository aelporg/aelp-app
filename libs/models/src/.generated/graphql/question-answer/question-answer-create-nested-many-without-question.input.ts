import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionAnswerCreateWithoutQuestionInput } from './question-answer-create-without-question.input';
import { QuestionAnswerCreateOrConnectWithoutQuestionInput } from './question-answer-create-or-connect-without-question.input';
import { QuestionAnswerCreateManyQuestionInputEnvelope } from './question-answer-create-many-question-input-envelope.input';
import { QuestionAnswerWhereUniqueInput } from './question-answer-where-unique.input';

@InputType()
export class QuestionAnswerCreateNestedManyWithoutQuestionInput {

    @Field(() => [QuestionAnswerCreateWithoutQuestionInput], {nullable:true})
    create?: Array<QuestionAnswerCreateWithoutQuestionInput>;

    @Field(() => [QuestionAnswerCreateOrConnectWithoutQuestionInput], {nullable:true})
    connectOrCreate?: Array<QuestionAnswerCreateOrConnectWithoutQuestionInput>;

    @Field(() => QuestionAnswerCreateManyQuestionInputEnvelope, {nullable:true})
    createMany?: QuestionAnswerCreateManyQuestionInputEnvelope;

    @Field(() => [QuestionAnswerWhereUniqueInput], {nullable:true})
    connect?: Array<QuestionAnswerWhereUniqueInput>;
}
