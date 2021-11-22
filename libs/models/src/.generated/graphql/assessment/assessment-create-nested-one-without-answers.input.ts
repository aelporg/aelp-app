import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentCreateWithoutAnswersInput } from './assessment-create-without-answers.input';
import { AssessmentCreateOrConnectWithoutAnswersInput } from './assessment-create-or-connect-without-answers.input';
import { AssessmentWhereUniqueInput } from './assessment-where-unique.input';

@InputType()
export class AssessmentCreateNestedOneWithoutAnswersInput {

    @Field(() => AssessmentCreateWithoutAnswersInput, {nullable:true})
    create?: AssessmentCreateWithoutAnswersInput;

    @Field(() => AssessmentCreateOrConnectWithoutAnswersInput, {nullable:true})
    connectOrCreate?: AssessmentCreateOrConnectWithoutAnswersInput;

    @Field(() => AssessmentWhereUniqueInput, {nullable:true})
    connect?: AssessmentWhereUniqueInput;
}
