import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';

@ObjectType()
export class PracticeProgrammingQuestionMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    questionId?: string;

    @Field(() => Difficulty, {nullable:true})
    diffculty?: keyof typeof Difficulty;

    @Field(() => String, {nullable:true})
    classroomId?: string;
}
