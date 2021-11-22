import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LinkedAccountWhereInput } from './linked-account-where.input';
import { LinkedAccountOrderByWithRelationInput } from './linked-account-order-by-with-relation.input';
import { LinkedAccountWhereUniqueInput } from './linked-account-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LinkedAccountScalarFieldEnum } from './linked-account-scalar-field.enum';

@ArgsType()
export class FindFirstLinkedAccountArgs {

    @Field(() => LinkedAccountWhereInput, {nullable:true})
    where?: LinkedAccountWhereInput;

    @Field(() => [LinkedAccountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LinkedAccountOrderByWithRelationInput>;

    @Field(() => LinkedAccountWhereUniqueInput, {nullable:true})
    cursor?: LinkedAccountWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LinkedAccountScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LinkedAccountScalarFieldEnum>;
}
