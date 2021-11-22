import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionChoiceCreateWithoutQuestionInput } from './multiple-choice-question-choice-create-without-question.input';
import { MultipleChoiceQuestionChoiceCreateOrConnectWithoutQuestionInput } from './multiple-choice-question-choice-create-or-connect-without-question.input';
import { MultipleChoiceQuestionChoiceUpsertWithWhereUniqueWithoutQuestionInput } from './multiple-choice-question-choice-upsert-with-where-unique-without-question.input';
import { MultipleChoiceQuestionChoiceCreateManyQuestionInputEnvelope } from './multiple-choice-question-choice-create-many-question-input-envelope.input';
import { MultipleChoiceQuestionChoiceWhereUniqueInput } from './multiple-choice-question-choice-where-unique.input';
import { MultipleChoiceQuestionChoiceUpdateWithWhereUniqueWithoutQuestionInput } from './multiple-choice-question-choice-update-with-where-unique-without-question.input';
import { MultipleChoiceQuestionChoiceUpdateManyWithWhereWithoutQuestionInput } from './multiple-choice-question-choice-update-many-with-where-without-question.input';
import { MultipleChoiceQuestionChoiceScalarWhereInput } from './multiple-choice-question-choice-scalar-where.input';

@InputType()
export class MultipleChoiceQuestionChoiceUncheckedUpdateManyWithoutQuestionInput {

    @Field(() => [MultipleChoiceQuestionChoiceCreateWithoutQuestionInput], {nullable:true})
    create?: Array<MultipleChoiceQuestionChoiceCreateWithoutQuestionInput>;

    @Field(() => [MultipleChoiceQuestionChoiceCreateOrConnectWithoutQuestionInput], {nullable:true})
    connectOrCreate?: Array<MultipleChoiceQuestionChoiceCreateOrConnectWithoutQuestionInput>;

    @Field(() => [MultipleChoiceQuestionChoiceUpsertWithWhereUniqueWithoutQuestionInput], {nullable:true})
    upsert?: Array<MultipleChoiceQuestionChoiceUpsertWithWhereUniqueWithoutQuestionInput>;

    @Field(() => MultipleChoiceQuestionChoiceCreateManyQuestionInputEnvelope, {nullable:true})
    createMany?: MultipleChoiceQuestionChoiceCreateManyQuestionInputEnvelope;

    @Field(() => [MultipleChoiceQuestionChoiceWhereUniqueInput], {nullable:true})
    set?: Array<MultipleChoiceQuestionChoiceWhereUniqueInput>;

    @Field(() => [MultipleChoiceQuestionChoiceWhereUniqueInput], {nullable:true})
    disconnect?: Array<MultipleChoiceQuestionChoiceWhereUniqueInput>;

    @Field(() => [MultipleChoiceQuestionChoiceWhereUniqueInput], {nullable:true})
    delete?: Array<MultipleChoiceQuestionChoiceWhereUniqueInput>;

    @Field(() => [MultipleChoiceQuestionChoiceWhereUniqueInput], {nullable:true})
    connect?: Array<MultipleChoiceQuestionChoiceWhereUniqueInput>;

    @Field(() => [MultipleChoiceQuestionChoiceUpdateWithWhereUniqueWithoutQuestionInput], {nullable:true})
    update?: Array<MultipleChoiceQuestionChoiceUpdateWithWhereUniqueWithoutQuestionInput>;

    @Field(() => [MultipleChoiceQuestionChoiceUpdateManyWithWhereWithoutQuestionInput], {nullable:true})
    updateMany?: Array<MultipleChoiceQuestionChoiceUpdateManyWithWhereWithoutQuestionInput>;

    @Field(() => [MultipleChoiceQuestionChoiceScalarWhereInput], {nullable:true})
    deleteMany?: Array<MultipleChoiceQuestionChoiceScalarWhereInput>;
}
