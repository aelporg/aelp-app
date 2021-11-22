import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UserRefreshTokenScalarWhereWithAggregatesInput {

    @Field(() => [UserRefreshTokenScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserRefreshTokenScalarWhereWithAggregatesInput>;

    @Field(() => [UserRefreshTokenScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserRefreshTokenScalarWhereWithAggregatesInput>;

    @Field(() => [UserRefreshTokenScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserRefreshTokenScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expiryDate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
