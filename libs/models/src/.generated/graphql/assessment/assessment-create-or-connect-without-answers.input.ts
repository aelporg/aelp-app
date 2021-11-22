import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentWhereUniqueInput } from './assessment-where-unique.input';
import { AssessmentCreateWithoutAnswersInput } from './assessment-create-without-answers.input';

@InputType()
export class AssessmentCreateOrConnectWithoutAnswersInput {

    @Field(() => AssessmentWhereUniqueInput, {nullable:false})
    where!: AssessmentWhereUniqueInput;

    @Field(() => AssessmentCreateWithoutAnswersInput, {nullable:false})
    create!: AssessmentCreateWithoutAnswersInput;
}
