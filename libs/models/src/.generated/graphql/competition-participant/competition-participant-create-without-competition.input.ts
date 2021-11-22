import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCompetitionsJoinedInput } from '../user/user-create-nested-one-without-competitions-joined.input';

@InputType()
export class CompetitionParticipantCreateWithoutCompetitionInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutCompetitionsJoinedInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCompetitionsJoinedInput;
}
