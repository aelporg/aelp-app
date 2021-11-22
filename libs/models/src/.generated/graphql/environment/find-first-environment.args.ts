import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentWhereInput } from './environment-where.input';
import { EnvironmentOrderByWithRelationInput } from './environment-order-by-with-relation.input';
import { EnvironmentWhereUniqueInput } from './environment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EnvironmentScalarFieldEnum } from './environment-scalar-field.enum';

@ArgsType()
export class FindFirstEnvironmentArgs {

    @Field(() => EnvironmentWhereInput, {nullable:true})
    where?: EnvironmentWhereInput;

    @Field(() => [EnvironmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EnvironmentOrderByWithRelationInput>;

    @Field(() => EnvironmentWhereUniqueInput, {nullable:true})
    cursor?: EnvironmentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EnvironmentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EnvironmentScalarFieldEnum>;
}
