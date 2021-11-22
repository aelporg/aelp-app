import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ProviderRelationFilter } from '../provider/provider-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class LinkedAccountWhereInput {

    @Field(() => [LinkedAccountWhereInput], {nullable:true})
    AND?: Array<LinkedAccountWhereInput>;

    @Field(() => [LinkedAccountWhereInput], {nullable:true})
    OR?: Array<LinkedAccountWhereInput>;

    @Field(() => [LinkedAccountWhereInput], {nullable:true})
    NOT?: Array<LinkedAccountWhereInput>;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => ProviderRelationFilter, {nullable:true})
    provider?: ProviderRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    providerId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    externalId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
