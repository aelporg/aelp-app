import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionUpdateInput } from './single-file-programming-question-update.input';
import { SingleFileProgrammingQuestionWhereUniqueInput } from './single-file-programming-question-where-unique.input';

@ArgsType()
export class UpdateOneSingleFileProgrammingQuestionArgs {

    @Field(() => SingleFileProgrammingQuestionUpdateInput, {nullable:false})
    data!: SingleFileProgrammingQuestionUpdateInput;

    @Field(() => SingleFileProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: SingleFileProgrammingQuestionWhereUniqueInput;
}
