import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryUpdateWithoutUsersInput } from './country-update-without-users.input';
import { CountryCreateWithoutUsersInput } from './country-create-without-users.input';

@InputType()
export class CountryUpsertWithoutUsersInput {

    @Field(() => CountryUpdateWithoutUsersInput, {nullable:false})
    update!: CountryUpdateWithoutUsersInput;

    @Field(() => CountryCreateWithoutUsersInput, {nullable:false})
    create!: CountryCreateWithoutUsersInput;
}
