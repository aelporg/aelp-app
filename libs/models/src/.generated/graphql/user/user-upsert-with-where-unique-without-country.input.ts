import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCountryInput } from './user-update-without-country.input';
import { UserCreateWithoutCountryInput } from './user-create-without-country.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutCountryInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCountryInput, {nullable:false})
    update!: UserUpdateWithoutCountryInput;

    @Field(() => UserCreateWithoutCountryInput, {nullable:false})
    create!: UserCreateWithoutCountryInput;
}
