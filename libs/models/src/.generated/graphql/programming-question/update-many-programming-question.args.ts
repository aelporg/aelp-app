import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgrammingQuestionUpdateManyMutationInput } from './programming-question-update-many-mutation.input';
import { ProgrammingQuestionWhereInput } from './programming-question-where.input';

@ArgsType()
export class UpdateManyProgrammingQuestionArgs {

    @Field(() => ProgrammingQuestionUpdateManyMutationInput, {nullable:false})
    data!: ProgrammingQuestionUpdateManyMutationInput;

    @Field(() => ProgrammingQuestionWhereInput, {nullable:true})
    where?: ProgrammingQuestionWhereInput;
}
