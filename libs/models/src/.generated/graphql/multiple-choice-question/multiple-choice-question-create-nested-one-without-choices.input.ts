import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleChoiceQuestionCreateWithoutChoicesInput } from './multiple-choice-question-create-without-choices.input';
import { MultipleChoiceQuestionCreateOrConnectWithoutChoicesInput } from './multiple-choice-question-create-or-connect-without-choices.input';
import { MultipleChoiceQuestionWhereUniqueInput } from './multiple-choice-question-where-unique.input';

@InputType()
export class MultipleChoiceQuestionCreateNestedOneWithoutChoicesInput {

    @Field(() => MultipleChoiceQuestionCreateWithoutChoicesInput, {nullable:true})
    create?: MultipleChoiceQuestionCreateWithoutChoicesInput;

    @Field(() => MultipleChoiceQuestionCreateOrConnectWithoutChoicesInput, {nullable:true})
    connectOrCreate?: MultipleChoiceQuestionCreateOrConnectWithoutChoicesInput;

    @Field(() => MultipleChoiceQuestionWhereUniqueInput, {nullable:true})
    connect?: MultipleChoiceQuestionWhereUniqueInput;
}
