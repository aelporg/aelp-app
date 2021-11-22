import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCountryInput } from './user-create-without-country.input';

@InputType()
export class UserCreateOrConnectWithoutCountryInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCountryInput, {nullable:false})
    create!: UserCreateWithoutCountryInput;
}
