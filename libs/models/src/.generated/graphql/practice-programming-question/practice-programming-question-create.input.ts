import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { ProgrammingQuestionCreateNestedOneWithoutPracticeInput } from '../programming-question/programming-question-create-nested-one-without-practice.input';
import { ClassroomCreateNestedOneWithoutPracticeProgrammingQuestionsInput } from '../classroom/classroom-create-nested-one-without-practice-programming-questions.input';

@InputType()
export class PracticeProgrammingQuestionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Difficulty, {nullable:false})
    diffculty!: keyof typeof Difficulty;

    @Field(() => ProgrammingQuestionCreateNestedOneWithoutPracticeInput, {nullable:false})
    question!: ProgrammingQuestionCreateNestedOneWithoutPracticeInput;

    @Field(() => ClassroomCreateNestedOneWithoutPracticeProgrammingQuestionsInput, {nullable:true})
    classroom?: ClassroomCreateNestedOneWithoutPracticeProgrammingQuestionsInput;
}
