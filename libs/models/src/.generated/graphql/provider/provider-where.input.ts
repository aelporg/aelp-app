import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { LinkedAccountListRelationFilter } from '../linked-account/linked-account-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProviderWhereInput {

    @Field(() => [ProviderWhereInput], {nullable:true})
    AND?: Array<ProviderWhereInput>;

    @Field(() => [ProviderWhereInput], {nullable:true})
    OR?: Array<ProviderWhereInput>;

    @Field(() => [ProviderWhereInput], {nullable:true})
    NOT?: Array<ProviderWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LinkedAccountListRelationFilter, {nullable:true})
    linkedAccounts?: LinkedAccountListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
