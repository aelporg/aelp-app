import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';

@InputType()
export class PracticeProgrammingQuestionUncheckedCreateWithoutQuestionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Difficulty, {nullable:false})
    diffculty!: keyof typeof Difficulty;

    @Field(() => String, {nullable:true})
    classroomId?: string;
}
