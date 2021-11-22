import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutCountryInput } from '../user/user-unchecked-create-nested-many-without-country.input';

@InputType()
export class CountryUncheckedCreateInput {

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

    @Field(() => UserUncheckedCreateNestedManyWithoutCountryInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutCountryInput;
}
