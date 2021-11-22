import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionCreateWithoutAssessmentInput } from './competition-create-without-assessment.input';
import { CompetitionCreateOrConnectWithoutAssessmentInput } from './competition-create-or-connect-without-assessment.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';

@InputType()
export class CompetitionCreateNestedOneWithoutAssessmentInput {

    @Field(() => CompetitionCreateWithoutAssessmentInput, {nullable:true})
    create?: CompetitionCreateWithoutAssessmentInput;

    @Field(() => CompetitionCreateOrConnectWithoutAssessmentInput, {nullable:true})
    connectOrCreate?: CompetitionCreateOrConnectWithoutAssessmentInput;

    @Field(() => CompetitionWhereUniqueInput, {nullable:true})
    connect?: CompetitionWhereUniqueInput;
}
