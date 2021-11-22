import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class LanguageScalarWhereInput {

    @Field(() => [LanguageScalarWhereInput], {nullable:true})
    AND?: Array<LanguageScalarWhereInput>;

    @Field(() => [LanguageScalarWhereInput], {nullable:true})
    OR?: Array<LanguageScalarWhereInput>;

    @Field(() => [LanguageScalarWhereInput], {nullable:true})
    NOT?: Array<LanguageScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    extension?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
