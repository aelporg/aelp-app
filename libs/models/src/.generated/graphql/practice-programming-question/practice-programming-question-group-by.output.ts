import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { PracticeProgrammingQuestionCountAggregate } from './practice-programming-question-count-aggregate.output';
import { PracticeProgrammingQuestionMinAggregate } from './practice-programming-question-min-aggregate.output';
import { PracticeProgrammingQuestionMaxAggregate } from './practice-programming-question-max-aggregate.output';

@ObjectType()
export class PracticeProgrammingQuestionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    questionId!: string;

    @Field(() => Difficulty, {nullable:false})
    diffculty!: keyof typeof Difficulty;

    @Field(() => String, {nullable:true})
    classroomId?: string;

    @Field(() => PracticeProgrammingQuestionCountAggregate, {nullable:true})
    _count?: PracticeProgrammingQuestionCountAggregate;

    @Field(() => PracticeProgrammingQuestionMinAggregate, {nullable:true})
    _min?: PracticeProgrammingQuestionMinAggregate;

    @Field(() => PracticeProgrammingQuestionMaxAggregate, {nullable:true})
    _max?: PracticeProgrammingQuestionMaxAggregate;
}
