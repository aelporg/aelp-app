import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutRefreshTokensInput } from './user-create-without-refresh-tokens.input';

@InputType()
export class UserCreateOrConnectWithoutRefreshTokensInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutRefreshTokensInput, {nullable:false})
    create!: UserCreateWithoutRefreshTokensInput;
}
