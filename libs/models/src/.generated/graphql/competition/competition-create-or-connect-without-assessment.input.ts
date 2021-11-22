import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionCreateWithoutAssessmentInput } from './competition-create-without-assessment.input';

@InputType()
export class CompetitionCreateOrConnectWithoutAssessmentInput {

    @Field(() => CompetitionWhereUniqueInput, {nullable:false})
    where!: CompetitionWhereUniqueInput;

    @Field(() => CompetitionCreateWithoutAssessmentInput, {nullable:false})
    create!: CompetitionCreateWithoutAssessmentInput;
}
