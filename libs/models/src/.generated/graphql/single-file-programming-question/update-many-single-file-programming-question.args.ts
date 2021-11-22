import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SingleFileProgrammingQuestionUpdateManyMutationInput } from './single-file-programming-question-update-many-mutation.input';
import { SingleFileProgrammingQuestionWhereInput } from './single-file-programming-question-where.input';

@ArgsType()
export class UpdateManySingleFileProgrammingQuestionArgs {

    @Field(() => SingleFileProgrammingQuestionUpdateManyMutationInput, {nullable:false})
    data!: SingleFileProgrammingQuestionUpdateManyMutationInput;

    @Field(() => SingleFileProgrammingQuestionWhereInput, {nullable:true})
    where?: SingleFileProgrammingQuestionWhereInput;
}
