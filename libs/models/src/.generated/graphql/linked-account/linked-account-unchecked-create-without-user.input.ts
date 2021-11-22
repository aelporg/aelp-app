import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LinkedAccountUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    providerId!: string;

    @Field(() => String, {nullable:false})
    externalId!: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
