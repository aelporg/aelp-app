import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentUpdateWithoutCompetitionInput } from './assessment-update-without-competition.input';
import { AssessmentCreateWithoutCompetitionInput } from './assessment-create-without-competition.input';

@InputType()
export class AssessmentUpsertWithoutCompetitionInput {

    @Field(() => AssessmentUpdateWithoutCompetitionInput, {nullable:false})
    update!: AssessmentUpdateWithoutCompetitionInput;

    @Field(() => AssessmentCreateWithoutCompetitionInput, {nullable:false})
    create!: AssessmentCreateWithoutCompetitionInput;
}
