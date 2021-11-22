import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRefreshTokensInput } from './user-create-without-refresh-tokens.input';
import { UserCreateOrConnectWithoutRefreshTokensInput } from './user-create-or-connect-without-refresh-tokens.input';
import { UserUpsertWithoutRefreshTokensInput } from './user-upsert-without-refresh-tokens.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutRefreshTokensInput } from './user-update-without-refresh-tokens.input';

@InputType()
export class UserUpdateOneRequiredWithoutRefreshTokensInput {

    @Field(() => UserCreateWithoutRefreshTokensInput, {nullable:true})
    create?: UserCreateWithoutRefreshTokensInput;

    @Field(() => UserCreateOrConnectWithoutRefreshTokensInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput;

    @Field(() => UserUpsertWithoutRefreshTokensInput, {nullable:true})
    upsert?: UserUpsertWithoutRefreshTokensInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutRefreshTokensInput, {nullable:true})
    update?: UserUpdateWithoutRefreshTokensInput;
}
