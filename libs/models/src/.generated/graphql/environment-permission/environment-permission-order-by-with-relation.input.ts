import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { EnvironmentOrderByWithRelationInput } from '../environment/environment-order-by-with-relation.input';

@InputType()
export class EnvironmentPermissionOrderByWithRelationInput {

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => EnvironmentOrderByWithRelationInput, {nullable:true})
    environment?: EnvironmentOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    environmentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    permission?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
