import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionUpdateManyMutationInput } from './practice-programming-question-update-many-mutation.input';
import { PracticeProgrammingQuestionWhereInput } from './practice-programming-question-where.input';

@ArgsType()
export class UpdateManyPracticeProgrammingQuestionArgs {

    @Field(() => PracticeProgrammingQuestionUpdateManyMutationInput, {nullable:false})
    data!: PracticeProgrammingQuestionUpdateManyMutationInput;

    @Field(() => PracticeProgrammingQuestionWhereInput, {nullable:true})
    where?: PracticeProgrammingQuestionWhereInput;
}
