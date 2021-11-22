import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionWhereUniqueInput } from './single-file-programming-question-where-unique.input';

@ArgsType()
export class DeleteOneSingleFileProgrammingQuestionArgs {

    @Field(() => SingleFileProgrammingQuestionWhereUniqueInput, {nullable:false})
    where!: SingleFileProgrammingQuestionWhereUniqueInput;
}
