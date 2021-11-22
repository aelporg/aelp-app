import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionCreateWithoutAssessmentInput } from './competition-create-without-assessment.input';
import { CompetitionCreateOrConnectWithoutAssessmentInput } from './competition-create-or-connect-without-assessment.input';
import { CompetitionUpsertWithoutAssessmentInput } from './competition-upsert-without-assessment.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionUpdateWithoutAssessmentInput } from './competition-update-without-assessment.input';

@InputType()
export class CompetitionUpdateOneWithoutAssessmentInput {

    @Field(() => CompetitionCreateWithoutAssessmentInput, {nullable:true})
    create?: CompetitionCreateWithoutAssessmentInput;

    @Field(() => CompetitionCreateOrConnectWithoutAssessmentInput, {nullable:true})
    connectOrCreate?: CompetitionCreateOrConnectWithoutAssessmentInput;

    @Field(() => CompetitionUpsertWithoutAssessmentInput, {nullable:true})
    upsert?: CompetitionUpsertWithoutAssessmentInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CompetitionWhereUniqueInput, {nullable:true})
    connect?: CompetitionWhereUniqueInput;

    @Field(() => CompetitionUpdateWithoutAssessmentInput, {nullable:true})
    update?: CompetitionUpdateWithoutAssessmentInput;
}
