import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkedAccountCreateManyProviderInput } from './linked-account-create-many-provider.input';

@InputType()
export class LinkedAccountCreateManyProviderInputEnvelope {

    @Field(() => [LinkedAccountCreateManyProviderInput], {nullable:false})
    data!: Array<LinkedAccountCreateManyProviderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
