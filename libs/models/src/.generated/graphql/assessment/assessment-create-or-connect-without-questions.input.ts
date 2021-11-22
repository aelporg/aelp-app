import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentWhereUniqueInput } from './assessment-where-unique.input';
import { AssessmentCreateWithoutQuestionsInput } from './assessment-create-without-questions.input';

@InputType()
export class AssessmentCreateOrConnectWithoutQuestionsInput {

    @Field(() => AssessmentWhereUniqueInput, {nullable:false})
    where!: AssessmentWhereUniqueInput;

    @Field(() => AssessmentCreateWithoutQuestionsInput, {nullable:false})
    create!: AssessmentCreateWithoutQuestionsInput;
}
