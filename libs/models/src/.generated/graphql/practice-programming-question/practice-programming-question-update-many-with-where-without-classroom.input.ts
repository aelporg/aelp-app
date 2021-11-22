import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionScalarWhereInput } from './practice-programming-question-scalar-where.input';
import { PracticeProgrammingQuestionUpdateManyMutationInput } from './practice-programming-question-update-many-mutation.input';

@InputType()
export class PracticeProgrammingQuestionUpdateManyWithWhereWithoutClassroomInput {

    @Field(() => PracticeProgrammingQuestionScalarWhereInput, {nullable:false})
    where!: PracticeProgrammingQuestionScalarWhereInput;

    @Field(() => PracticeProgrammingQuestionUpdateManyMutationInput, {nullable:false})
    data!: PracticeProgrammingQuestionUpdateManyMutationInput;
}
