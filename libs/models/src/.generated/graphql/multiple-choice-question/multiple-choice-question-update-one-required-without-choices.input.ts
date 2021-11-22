import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionCreateWithoutChoicesInput } from './multiple-choice-question-create-without-choices.input';
import { MultipleChoiceQuestionCreateOrConnectWithoutChoicesInput } from './multiple-choice-question-create-or-connect-without-choices.input';
import { MultipleChoiceQuestionUpsertWithoutChoicesInput } from './multiple-choice-question-upsert-without-choices.input';
import { MultipleChoiceQuestionWhereUniqueInput } from './multiple-choice-question-where-unique.input';
import { MultipleChoiceQuestionUpdateWithoutChoicesInput } from './multiple-choice-question-update-without-choices.input';

@InputType()
export class MultipleChoiceQuestionUpdateOneRequiredWithoutChoicesInput {

    @Field(() => MultipleChoiceQuestionCreateWithoutChoicesInput, {nullable:true})
    create?: MultipleChoiceQuestionCreateWithoutChoicesInput;

    @Field(() => MultipleChoiceQuestionCreateOrConnectWithoutChoicesInput, {nullable:true})
    connectOrCreate?: MultipleChoiceQuestionCreateOrConnectWithoutChoicesInput;

    @Field(() => MultipleChoiceQuestionUpsertWithoutChoicesInput, {nullable:true})
    upsert?: MultipleChoiceQuestionUpsertWithoutChoicesInput;

    @Field(() => MultipleChoiceQuestionWhereUniqueInput, {nullable:true})
    connect?: MultipleChoiceQuestionWhereUniqueInput;

    @Field(() => MultipleChoiceQuestionUpdateWithoutChoicesInput, {nullable:true})
    update?: MultipleChoiceQuestionUpdateWithoutChoicesInput;
}
