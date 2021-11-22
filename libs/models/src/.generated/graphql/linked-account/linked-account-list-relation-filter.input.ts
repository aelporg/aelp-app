import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LinkedAccountWhereInput } from './linked-account-where.input';

@InputType()
export class LinkedAccountListRelationFilter {

    @Field(() => LinkedAccountWhereInput, {nullable:true})
    every?: LinkedAccountWhereInput;

    @Field(() => LinkedAccountWhereInput, {nullable:true})
    some?: LinkedAccountWhereInput;

    @Field(() => LinkedAccountWhereInput, {nullable:true})
    none?: LinkedAccountWhereInput;
}
