import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentCreateWithoutCompetitionInput } from './assessment-create-without-competition.input';
import { AssessmentCreateOrConnectWithoutCompetitionInput } from './assessment-create-or-connect-without-competition.input';
import { AssessmentWhereUniqueInput } from './assessment-where-unique.input';

@InputType()
export class AssessmentCreateNestedOneWithoutCompetitionInput {

    @Field(() => AssessmentCreateWithoutCompetitionInput, {nullable:true})
    create?: AssessmentCreateWithoutCompetitionInput;

    @Field(() => AssessmentCreateOrConnectWithoutCompetitionInput, {nullable:true})
    connectOrCreate?: AssessmentCreateOrConnectWithoutCompetitionInput;

    @Field(() => AssessmentWhereUniqueInput, {nullable:true})
    connect?: AssessmentWhereUniqueInput;
}
