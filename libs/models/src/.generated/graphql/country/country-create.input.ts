import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutCountryInput } from '../user/user-create-nested-many-without-country.input';

@InputType()
export class CountryCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    countryName!: string;

    @Field(() => String, {nullable:false})
    countryCode!: string;

    @Field(() => String, {nullable:false})
    flagImageUrl!: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutCountryInput, {nullable:true})
    users?: UserCreateNestedManyWithoutCountryInput;
}
