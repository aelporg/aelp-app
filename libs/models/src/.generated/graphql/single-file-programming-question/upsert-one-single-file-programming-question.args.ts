import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionWhereUniqueInput } from './single-file-programming-question-where-unique.input';
import { SingleFileProgrammingQuestionCreateInput } from './single-file-programming-question-create.input';
import { SingleFileProgrammingQuestionUpdateInput } from './single-file-programming-question-update.input';

@ArgsType()
export class UpsertOneSingleFileProgrammingQuestionArgs {

    @Field(() => SingleFileProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: SingleFileProgrammingQuestionWhereUniqueInput;

    @Field(() => SingleFileProgrammingQuestionCreateInput, {nullable:false})
    create!: SingleFileProgrammingQuestionCreateInput;

    @Field(() => SingleFileProgrammingQuestionUpdateInput, {nullable:false})
    update!: SingleFileProgrammingQuestionUpdateInput;
}
