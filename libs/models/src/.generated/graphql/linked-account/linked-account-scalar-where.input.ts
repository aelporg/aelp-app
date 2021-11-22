import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class LinkedAccountScalarWhereInput {

    @Field(() => [LinkedAccountScalarWhereInput], {nullable:true})
    AND?: Array<LinkedAccountScalarWhereInput>;

    @Field(() => [LinkedAccountScalarWhereInput], {nullable:true})
    OR?: Array<LinkedAccountScalarWhereInput>;

    @Field(() => [LinkedAccountScalarWhereInput], {nullable:true})
    NOT?: Array<LinkedAccountScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    providerId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    externalId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
