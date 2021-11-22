import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { CountryCreateWithoutUsersInput } from './country-create-without-users.input';

@InputType()
export class CountryCreateOrConnectWithoutUsersInput {

    @Field(() => CountryWhereUniqueInput, {nullable:false})
    where!: CountryWhereUniqueInput;

    @Field(() => CountryCreateWithoutUsersInput, {nullable:false})
    create!: CountryCreateWithoutUsersInput;
}
