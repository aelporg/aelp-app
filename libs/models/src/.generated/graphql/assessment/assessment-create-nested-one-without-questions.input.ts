import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentCreateWithoutQuestionsInput } from './assessment-create-without-questions.input';
import { AssessmentCreateOrConnectWithoutQuestionsInput } from './assessment-create-or-connect-without-questions.input';
import { AssessmentWhereUniqueInput } from './assessment-where-unique.input';

@InputType()
export class AssessmentCreateNestedOneWithoutQuestionsInput {

    @Field(() => AssessmentCreateWithoutQuestionsInput, {nullable:true})
    create?: AssessmentCreateWithoutQuestionsInput;

    @Field(() => AssessmentCreateOrConnectWithoutQuestionsInput, {nullable:true})
    connectOrCreate?: AssessmentCreateOrConnectWithoutQuestionsInput;

    @Field(() => AssessmentWhereUniqueInput, {nullable:true})
    connect?: AssessmentWhereUniqueInput;
}
