import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserRefreshTokenScalarWhereInput {

    @Field(() => [UserRefreshTokenScalarWhereInput], {nullable:true})
    AND?: Array<UserRefreshTokenScalarWhereInput>;

    @Field(() => [UserRefreshTokenScalarWhereInput], {nullable:true})
    OR?: Array<UserRefreshTokenScalarWhereInput>;

    @Field(() => [UserRefreshTokenScalarWhereInput], {nullable:true})
    NOT?: Array<UserRefreshTokenScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
