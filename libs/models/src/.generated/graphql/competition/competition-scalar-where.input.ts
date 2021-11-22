import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CompetitionScalarWhereInput {

    @Field(() => [CompetitionScalarWhereInput], {nullable:true})
    AND?: Array<CompetitionScalarWhereInput>;

    @Field(() => [CompetitionScalarWhereInput], {nullable:true})
    OR?: Array<CompetitionScalarWhereInput>;

    @Field(() => [CompetitionScalarWhereInput], {nullable:true})
    NOT?: Array<CompetitionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPrivate?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    creatorUserId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
