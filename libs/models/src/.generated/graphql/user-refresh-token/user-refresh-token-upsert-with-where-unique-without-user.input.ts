import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRefreshTokenWhereUniqueInput } from './user-refresh-token-where-unique.input';
import { UserRefreshTokenUpdateWithoutUserInput } from './user-refresh-token-update-without-user.input';
import { UserRefreshTokenCreateWithoutUserInput } from './user-refresh-token-create-without-user.input';

@InputType()
export class UserRefreshTokenUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserRefreshTokenWhereUniqueInput, {nullable:false})
    where!: UserRefreshTokenWhereUniqueInput;

    @Field(() => UserRefreshTokenUpdateWithoutUserInput, {nullable:false})
    update!: UserRefreshTokenUpdateWithoutUserInput;

    @Field(() => UserRefreshTokenCreateWithoutUserInput, {nullable:false})
    create!: UserRefreshTokenCreateWithoutUserInput;
}
