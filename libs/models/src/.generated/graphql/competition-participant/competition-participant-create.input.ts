import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCompetitionsJoinedInput } from '../user/user-create-nested-one-without-competitions-joined.input';
import { CompetitionCreateNestedOneWithoutParticipantsInput } from '../competition/competition-create-nested-one-without-participants.input';

@InputType()
export class CompetitionParticipantCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutCompetitionsJoinedInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCompetitionsJoinedInput;

    @Field(() => CompetitionCreateNestedOneWithoutParticipantsInput, {nullable:false})
    competition!: CompetitionCreateNestedOneWithoutParticipantsInput;
}
