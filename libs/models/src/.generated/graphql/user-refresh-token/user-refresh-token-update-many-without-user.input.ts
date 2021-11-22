import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRefreshTokenCreateWithoutUserInput } from './user-refresh-token-create-without-user.input';
import { UserRefreshTokenCreateOrConnectWithoutUserInput } from './user-refresh-token-create-or-connect-without-user.input';
import { UserRefreshTokenUpsertWithWhereUniqueWithoutUserInput } from './user-refresh-token-upsert-with-where-unique-without-user.input';
import { UserRefreshTokenCreateManyUserInputEnvelope } from './user-refresh-token-create-many-user-input-envelope.input';
import { UserRefreshTokenWhereUniqueInput } from './user-refresh-token-where-unique.input';
import { UserRefreshTokenUpdateWithWhereUniqueWithoutUserInput } from './user-refresh-token-update-with-where-unique-without-user.input';
import { UserRefreshTokenUpdateManyWithWhereWithoutUserInput } from './user-refresh-token-update-many-with-where-without-user.input';
import { UserRefreshTokenScalarWhereInput } from './user-refresh-token-scalar-where.input';

@InputType()
export class UserRefreshTokenUpdateManyWithoutUserInput {

    @Field(() => [UserRefreshTokenCreateWithoutUserInput], {nullable:true})
    create?: Array<UserRefreshTokenCreateWithoutUserInput>;

    @Field(() => [UserRefreshTokenCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<UserRefreshTokenCreateOrConnectWithoutUserInput>;

    @Field(() => [UserRefreshTokenUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<UserRefreshTokenUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserRefreshTokenCreateManyUserInputEnvelope, {nullable:true})
    createMany?: UserRefreshTokenCreateManyUserInputEnvelope;

    @Field(() => [UserRefreshTokenWhereUniqueInput], {nullable:true})
    set?: Array<UserRefreshTokenWhereUniqueInput>;

    @Field(() => [UserRefreshTokenWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserRefreshTokenWhereUniqueInput>;

    @Field(() => [UserRefreshTokenWhereUniqueInput], {nullable:true})
    delete?: Array<UserRefreshTokenWhereUniqueInput>;

    @Field(() => [UserRefreshTokenWhereUniqueInput], {nullable:true})
    connect?: Array<UserRefreshTokenWhereUniqueInput>;

    @Field(() => [UserRefreshTokenUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<UserRefreshTokenUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserRefreshTokenUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<UserRefreshTokenUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserRefreshTokenScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserRefreshTokenScalarWhereInput>;
}
