import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionWhereInput } from './single-file-programming-question-where.input';

@ArgsType()
export class DeleteManySingleFileProgrammingQuestionArgs {

    @Field(() => SingleFileProgrammingQuestionWhereInput, {nullable:true})
    where?: SingleFileProgrammingQuestionWhereInput;
}
