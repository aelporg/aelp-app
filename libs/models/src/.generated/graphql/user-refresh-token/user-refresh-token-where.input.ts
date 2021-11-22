import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserRefreshTokenWhereInput {

    @Field(() => [UserRefreshTokenWhereInput], {nullable:true})
    AND?: Array<UserRefreshTokenWhereInput>;

    @Field(() => [UserRefreshTokenWhereInput], {nullable:true})
    OR?: Array<UserRefreshTokenWhereInput>;

    @Field(() => [UserRefreshTokenWhereInput], {nullable:true})
    NOT?: Array<UserRefreshTokenWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    token?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiryDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
