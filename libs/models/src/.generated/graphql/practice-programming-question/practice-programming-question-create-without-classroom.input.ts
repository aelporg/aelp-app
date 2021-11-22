import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { ProgrammingQuestionCreateNestedOneWithoutPracticeInput } from '../programming-question/programming-question-create-nested-one-without-practice.input';

@InputType()
export class PracticeProgrammingQuestionCreateWithoutClassroomInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Difficulty, {nullable:false})
    diffculty!: keyof typeof Difficulty;

    @Field(() => ProgrammingQuestionCreateNestedOneWithoutPracticeInput, {nullable:false})
    question!: ProgrammingQuestionCreateNestedOneWithoutPracticeInput;
}
