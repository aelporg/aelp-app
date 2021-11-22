import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionCreateInput } from './single-file-programming-question-create.input';

@ArgsType()
export class CreateOneSingleFileProgrammingQuestionArgs {

    @Field(() => SingleFileProgrammingQuestionCreateInput, {nullable:false})
    data!: SingleFileProgrammingQuestionCreateInput;
}
