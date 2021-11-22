import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCreatedCompetitionsInput } from '../user/user-create-nested-one-without-created-competitions.input';
import { CompetitionParticipantCreateNestedManyWithoutCompetitionInput } from '../competition-participant/competition-participant-create-nested-many-without-competition.input';

@InputType()
export class CompetitionCreateWithoutAssessmentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    isPrivate?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutCreatedCompetitionsInput, {nullable:false})
    creatorUser!: UserCreateNestedOneWithoutCreatedCompetitionsInput;

    @Field(() => CompetitionParticipantCreateNestedManyWithoutCompetitionInput, {nullable:true})
    participants?: CompetitionParticipantCreateNestedManyWithoutCompetitionInput;
}
