import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCountryInput } from './user-update-without-country.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutCountryInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCountryInput, {nullable:false})
    data!: UserUpdateWithoutCountryInput;
}
