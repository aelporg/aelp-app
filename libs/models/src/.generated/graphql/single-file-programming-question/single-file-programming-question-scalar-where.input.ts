import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class SingleFileProgrammingQuestionScalarWhereInput {

    @Field(() => [SingleFileProgrammingQuestionScalarWhereInput], {nullable:true})
    AND?: Array<SingleFileProgrammingQuestionScalarWhereInput>;

    @Field(() => [SingleFileProgrammingQuestionScalarWhereInput], {nullable:true})
    OR?: Array<SingleFileProgrammingQuestionScalarWhereInput>;

    @Field(() => [SingleFileProgrammingQuestionScalarWhereInput], {nullable:true})
    NOT?: Array<SingleFileProgrammingQuestionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    defaultCode?: StringFilter;
}
