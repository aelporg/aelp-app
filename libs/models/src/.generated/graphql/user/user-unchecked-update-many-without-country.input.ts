import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCountryInput } from './user-create-without-country.input';
import { UserCreateOrConnectWithoutCountryInput } from './user-create-or-connect-without-country.input';
import { UserUpsertWithWhereUniqueWithoutCountryInput } from './user-upsert-with-where-unique-without-country.input';
import { UserCreateManyCountryInputEnvelope } from './user-create-many-country-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutCountryInput } from './user-update-with-where-unique-without-country.input';
import { UserUpdateManyWithWhereWithoutCountryInput } from './user-update-many-with-where-without-country.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutCountryInput {

    @Field(() => [UserCreateWithoutCountryInput], {nullable:true})
    create?: Array<UserCreateWithoutCountryInput>;

    @Field(() => [UserCreateOrConnectWithoutCountryInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutCountryInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutCountryInput], {nullable:true})
    upsert?: Array<UserUpsertWithWhereUniqueWithoutCountryInput>;

    @Field(() => UserCreateManyCountryInputEnvelope, {nullable:true})
    createMany?: UserCreateManyCountryInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutCountryInput], {nullable:true})
    update?: Array<UserUpdateWithWhereUniqueWithoutCountryInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutCountryInput], {nullable:true})
    updateMany?: Array<UserUpdateManyWithWhereWithoutCountryInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScalarWhereInput>;
}
