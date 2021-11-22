import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRefreshTokenWhereInput } from './user-refresh-token-where.input';
import { UserRefreshTokenOrderByWithRelationInput } from './user-refresh-token-order-by-with-relation.input';
import { UserRefreshTokenWhereUniqueInput } from './user-refresh-token-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserRefreshTokenScalarFieldEnum } from './user-refresh-token-scalar-field.enum';

@ArgsType()
export class FindFirstUserRefreshTokenArgs {

    @Field(() => UserRefreshTokenWhereInput, {nullable:true})
    where?: UserRefreshTokenWhereInput;

    @Field(() => [UserRefreshTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserRefreshTokenOrderByWithRelationInput>;

    @Field(() => UserRefreshTokenWhereUniqueInput, {nullable:true})
    cursor?: UserRefreshTokenWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserRefreshTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserRefreshTokenScalarFieldEnum>;
}
