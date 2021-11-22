import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentCreateNestedOneWithoutCompetitionInput } from '../assessment/assessment-create-nested-one-without-competition.input';
import { CompetitionParticipantCreateNestedManyWithoutCompetitionInput } from '../competition-participant/competition-participant-create-nested-many-without-competition.input';

@InputType()
export class CompetitionCreateWithoutCreatorUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    isPrivate?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AssessmentCreateNestedOneWithoutCompetitionInput, {nullable:true})
    assessment?: AssessmentCreateNestedOneWithoutCompetitionInput;

    @Field(() => CompetitionParticipantCreateNestedManyWithoutCompetitionInput, {nullable:true})
    participants?: CompetitionParticipantCreateNestedManyWithoutCompetitionInput;
}
