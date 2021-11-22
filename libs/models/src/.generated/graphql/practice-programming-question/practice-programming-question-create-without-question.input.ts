import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { ClassroomCreateNestedOneWithoutPracticeProgrammingQuestionsInput } from '../classroom/classroom-create-nested-one-without-practice-programming-questions.input';

@InputType()
export class PracticeProgrammingQuestionCreateWithoutQuestionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Difficulty, {nullable:false})
    diffculty!: keyof typeof Difficulty;

    @Field(() => ClassroomCreateNestedOneWithoutPracticeProgrammingQuestionsInput, {nullable:true})
    classroom?: ClassroomCreateNestedOneWithoutPracticeProgrammingQuestionsInput;
}
