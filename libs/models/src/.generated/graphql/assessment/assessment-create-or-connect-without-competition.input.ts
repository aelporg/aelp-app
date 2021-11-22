import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentWhereUniqueInput } from './assessment-where-unique.input';
import { AssessmentCreateWithoutCompetitionInput } from './assessment-create-without-competition.input';

@InputType()
export class AssessmentCreateOrConnectWithoutCompetitionInput {

    @Field(() => AssessmentWhereUniqueInput, {nullable:false})
    where!: AssessmentWhereUniqueInput;

    @Field(() => AssessmentCreateWithoutCompetitionInput, {nullable:false})
    create!: AssessmentCreateWithoutCompetitionInput;
}
