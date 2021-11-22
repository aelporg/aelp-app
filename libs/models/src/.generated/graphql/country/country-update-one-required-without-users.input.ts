import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateWithoutUsersInput } from './country-create-without-users.input';
import { CountryCreateOrConnectWithoutUsersInput } from './country-create-or-connect-without-users.input';
import { CountryUpsertWithoutUsersInput } from './country-upsert-without-users.input';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { CountryUpdateWithoutUsersInput } from './country-update-without-users.input';

@InputType()
export class CountryUpdateOneRequiredWithoutUsersInput {

    @Field(() => CountryCreateWithoutUsersInput, {nullable:true})
    create?: CountryCreateWithoutUsersInput;

    @Field(() => CountryCreateOrConnectWithoutUsersInput, {nullable:true})
    connectOrCreate?: CountryCreateOrConnectWithoutUsersInput;

    @Field(() => CountryUpsertWithoutUsersInput, {nullable:true})
    upsert?: CountryUpsertWithoutUsersInput;

    @Field(() => CountryWhereUniqueInput, {nullable:true})
    connect?: CountryWhereUniqueInput;

    @Field(() => CountryUpdateWithoutUsersInput, {nullable:true})
    update?: CountryUpdateWithoutUsersInput;
}
