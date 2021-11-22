import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateWithoutUsersInput } from './country-create-without-users.input';
import { CountryCreateOrConnectWithoutUsersInput } from './country-create-or-connect-without-users.input';
import { CountryWhereUniqueInput } from './country-where-unique.input';

@InputType()
export class CountryCreateNestedOneWithoutUsersInput {

    @Field(() => CountryCreateWithoutUsersInput, {nullable:true})
    create?: CountryCreateWithoutUsersInput;

    @Field(() => CountryCreateOrConnectWithoutUsersInput, {nullable:true})
    connectOrCreate?: CountryCreateOrConnectWithoutUsersInput;

    @Field(() => CountryWhereUniqueInput, {nullable:true})
    connect?: CountryWhereUniqueInput;
}
