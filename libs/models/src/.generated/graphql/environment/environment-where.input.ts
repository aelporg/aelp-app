import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FileListRelationFilter } from '../file/file-list-relation-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProgrammingQuestionAnswerListRelationFilter } from '../programming-question-answer/programming-question-answer-list-relation-filter.input';
import { EnvironmentPermissionListRelationFilter } from '../environment-permission/environment-permission-list-relation-filter.input';

@InputType()
export class EnvironmentWhereInput {

    @Field(() => [EnvironmentWhereInput], {nullable:true})
    AND?: Array<EnvironmentWhereInput>;

    @Field(() => [EnvironmentWhereInput], {nullable:true})
    OR?: Array<EnvironmentWhereInput>;

    @Field(() => [EnvironmentWhereInput], {nullable:true})
    NOT?: Array<EnvironmentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => FileListRelationFilter, {nullable:true})
    files?: FileListRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    scratchPadData?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    submitted?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProgrammingQuestionAnswerListRelationFilter, {nullable:true})
    answers?: ProgrammingQuestionAnswerListRelationFilter;

    @Field(() => EnvironmentPermissionListRelationFilter, {nullable:true})
    permissions?: EnvironmentPermissionListRelationFilter;
}
