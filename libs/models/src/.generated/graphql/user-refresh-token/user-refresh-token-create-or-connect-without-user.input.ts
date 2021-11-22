import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRefreshTokenWhereUniqueInput } from './user-refresh-token-where-unique.input';
import { UserRefreshTokenCreateWithoutUserInput } from './user-refresh-token-create-without-user.input';

@InputType()
export class UserRefreshTokenCreateOrConnectWithoutUserInput {

    @Field(() => UserRefreshTokenWhereUniqueInput, {nullable:false})
    where!: UserRefreshTokenWhereUniqueInput;

    @Field(() => UserRefreshTokenCreateWithoutUserInput, {nullable:false})
    create!: UserRefreshTokenCreateWithoutUserInput;
}
