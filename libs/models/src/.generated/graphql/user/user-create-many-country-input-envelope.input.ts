import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyCountryInput } from './user-create-many-country.input';

@InputType()
export class UserCreateManyCountryInputEnvelope {

    @Field(() => [UserCreateManyCountryInput], {nullable:false})
    data!: Array<UserCreateManyCountryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
