import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCompetitionsJoinedInput } from './user-update-without-competitions-joined.input';
import { UserCreateWithoutCompetitionsJoinedInput } from './user-create-without-competitions-joined.input';

@InputType()
export class UserUpsertWithoutCompetitionsJoinedInput {

    @Field(() => UserUpdateWithoutCompetitionsJoinedInput, {nullable:false})
    update!: UserUpdateWithoutCompetitionsJoinedInput;

    @Field(() => UserCreateWithoutCompetitionsJoinedInput, {nullable:false})
    create!: UserCreateWithoutCompetitionsJoinedInput;
}
