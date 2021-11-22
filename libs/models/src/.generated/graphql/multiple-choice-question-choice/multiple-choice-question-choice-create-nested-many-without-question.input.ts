import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceCreateWithoutQuestionInput } from './multiple-choice-question-choice-create-without-question.input';
import { MultipleChoiceQuestionChoiceCreateOrConnectWithoutQuestionInput } from './multiple-choice-question-choice-create-or-connect-without-question.input';
import { MultipleChoiceQuestionChoiceCreateManyQuestionInputEnvelope } from './multiple-choice-question-choice-create-many-question-input-envelope.input';
import { MultipleChoiceQuestionChoiceWhereUniqueInput } from './multiple-choice-question-choice-where-unique.input';

@InputType()
export class MultipleChoiceQuestionChoiceCreateNestedManyWithoutQuestionInput {

    @Field(() => [MultipleChoiceQuestionChoiceCreateWithoutQuestionInput], {nullable:true})
    create?: Array<MultipleChoiceQuestionChoiceCreateWithoutQuestionInput>;

    @Field(() => [MultipleChoiceQuestionChoiceCreateOrConnectWithoutQuestionInput], {nullable:true})
    connectOrCreate?: Array<MultipleChoiceQuestionChoiceCreateOrConnectWithoutQuestionInput>;

    @Field(() => MultipleChoiceQuestionChoiceCreateManyQuestionInputEnvelope, {nullable:true})
    createMany?: MultipleChoiceQuestionChoiceCreateManyQuestionInputEnvelope;

    @Field(() => [MultipleChoiceQuestionChoiceWhereUniqueInput], {nullable:true})
    connect?: Array<MultipleChoiceQuestionChoiceWhereUniqueInput>;
}
