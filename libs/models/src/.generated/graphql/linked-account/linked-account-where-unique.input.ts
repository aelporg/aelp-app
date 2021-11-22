import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkedAccountUserIdProviderIdCompoundUniqueInput } from './linked-account-user-id-provider-id-compound-unique.input';

@InputType()
export class LinkedAccountWhereUniqueInput {

    @Field(() => String, {nullable:true})
    externalId?: string;

    @Field(() => LinkedAccountUserIdProviderIdCompoundUniqueInput, {nullable:true})
    userId_providerId?: LinkedAccountUserIdProviderIdCompoundUniqueInput;
}
