import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkedAccountCreateManyUserInput } from './linked-account-create-many-user.input';

@InputType()
export class LinkedAccountCreateManyUserInputEnvelope {

    @Field(() => [LinkedAccountCreateManyUserInput], {nullable:false})
    data!: Array<LinkedAccountCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
