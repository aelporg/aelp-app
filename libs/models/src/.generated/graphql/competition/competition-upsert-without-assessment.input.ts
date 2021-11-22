import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompetitionUpdateWithoutAssessmentInput } from './competition-update-without-assessment.input';
import { CompetitionCreateWithoutAssessmentInput } from './competition-create-without-assessment.input';

@InputType()
export class CompetitionUpsertWithoutAssessmentInput {

    @Field(() => CompetitionUpdateWithoutAssessmentInput, {nullable:false})
    update!: CompetitionUpdateWithoutAssessmentInput;

    @Field(() => CompetitionCreateWithoutAssessmentInput, {nullable:false})
    create!: CompetitionCreateWithoutAssessmentInput;
}
