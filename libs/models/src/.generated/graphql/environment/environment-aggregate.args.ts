import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EnvironmentWhereInput } from './environment-where.input';
import { EnvironmentOrderByWithRelationInput } from './environment-order-by-with-relation.input';
import { EnvironmentWhereUniqueInput } from './environment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EnvironmentCountAggregateInput } from './environment-count-aggregate.input';
import { EnvironmentMinAggregateInput } from './environment-min-aggregate.input';
import { EnvironmentMaxAggregateInput } from './environment-max-aggregate.input';

@ArgsType()
export class EnvironmentAggregateArgs {

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

    @Field(() => EnvironmentCountAggregateInput, {nullable:true})
    _count?: EnvironmentCountAggregateInput;

    @Field(() => EnvironmentMinAggregateInput, {nullable:true})
    _min?: EnvironmentMinAggregateInput;

    @Field(() => EnvironmentMaxAggregateInput, {nullable:true})
    _max?: EnvironmentMaxAggregateInput;
}
