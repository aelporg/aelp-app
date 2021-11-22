import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CountryWhereInput {

    @Field(() => [CountryWhereInput], {nullable:true})
    AND?: Array<CountryWhereInput>;

    @Field(() => [CountryWhereInput], {nullable:true})
    OR?: Array<CountryWhereInput>;

    @Field(() => [CountryWhereInput], {nullable:true})
    NOT?: Array<CountryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    countryName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    countryCode?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    flagImageUrl?: StringFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
