import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssessmentUncheckedCreateNestedOneWithoutCompetitionInput } from '../assessment/assessment-unchecked-create-nested-one-without-competition.input';
import { CompetitionParticipantUncheckedCreateNestedManyWithoutCompetitionInput } from '../competition-participant/competition-participant-unchecked-create-nested-many-without-competition.input';

@InputType()
export class CompetitionUncheckedCreateWithoutCreatorUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    isPrivate?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AssessmentUncheckedCreateNestedOneWithoutCompetitionInput, {nullable:true})
    assessment?: AssessmentUncheckedCreateNestedOneWithoutCompetitionInput;

    @Field(() => CompetitionParticipantUncheckedCreateNestedManyWithoutCompetitionInput, {nullable:true})
    participants?: CompetitionParticipantUncheckedCreateNestedManyWithoutCompetitionInput;
}
