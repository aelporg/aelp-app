import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ProgrammingQuestionAnswerScalarWhereInput {

    @Field(() => [ProgrammingQuestionAnswerScalarWhereInput], {nullable:true})
    AND?: Array<ProgrammingQuestionAnswerScalarWhereInput>;

    @Field(() => [ProgrammingQuestionAnswerScalarWhereInput], {nullable:true})
    OR?: Array<ProgrammingQuestionAnswerScalarWhereInput>;

    @Field(() => [ProgrammingQuestionAnswerScalarWhereInput], {nullable:true})
    NOT?: Array<ProgrammingQuestionAnswerScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    envirnmentId?: StringFilter;
}
