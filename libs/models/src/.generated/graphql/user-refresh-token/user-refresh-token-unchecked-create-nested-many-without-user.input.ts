import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRefreshTokenCreateWithoutUserInput } from './user-refresh-token-create-without-user.input';
import { UserRefreshTokenCreateOrConnectWithoutUserInput } from './user-refresh-token-create-or-connect-without-user.input';
import { UserRefreshTokenCreateManyUserInputEnvelope } from './user-refresh-token-create-many-user-input-envelope.input';
import { UserRefreshTokenWhereUniqueInput } from './user-refresh-token-where-unique.input';

@InputType()
export class UserRefreshTokenUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [UserRefreshTokenCreateWithoutUserInput], {nullable:true})
    create?: Array<UserRefreshTokenCreateWithoutUserInput>;

    @Field(() => [UserRefreshTokenCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<UserRefreshTokenCreateOrConnectWithoutUserInput>;

    @Field(() => UserRefreshTokenCreateManyUserInputEnvelope, {nullable:true})
    createMany?: UserRefreshTokenCreateManyUserInputEnvelope;

    @Field(() => [UserRefreshTokenWhereUniqueInput], {nullable:true})
    connect?: Array<UserRefreshTokenWhereUniqueInput>;
}
