import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCountryInput } from './user-create-without-country.input';
import { UserCreateOrConnectWithoutCountryInput } from './user-create-or-connect-without-country.input';
import { UserCreateManyCountryInputEnvelope } from './user-create-many-country-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutCountryInput {

    @Field(() => [UserCreateWithoutCountryInput], {nullable:true})
    create?: Array<UserCreateWithoutCountryInput>;

    @Field(() => [UserCreateOrConnectWithoutCountryInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutCountryInput>;

    @Field(() => UserCreateManyCountryInputEnvelope, {nullable:true})
    createMany?: UserCreateManyCountryInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
}
