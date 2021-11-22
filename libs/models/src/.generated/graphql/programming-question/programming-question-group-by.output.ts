import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProgrammingQuestionType } from '../prisma/programming-question-type.enum';
import { ProgrammingQuestionCountAggregate } from './programming-question-count-aggregate.output';
import { ProgrammingQuestionMinAggregate } from './programming-question-min-aggregate.output';
import { ProgrammingQuestionMaxAggregate } from './programming-question-max-aggregate.output';

@ObjectType()
export class ProgrammingQuestionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    statementMrkdwn!: string;

    @Field(() => String, {nullable:false})
    statementCompiled!: string;

    @Field(() => ProgrammingQuestionType, {nullable:false})
    programmingQuestionType!: keyof typeof ProgrammingQuestionType;

    @Field(() => String, {nullable:true})
    singleFileProgrammingQuestionId?: string;

    @Field(() => String, {nullable:true})
    multipleFilesProgrammingQuestionId?: string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => ProgrammingQuestionCountAggregate, {nullable:true})
    _count?: ProgrammingQuestionCountAggregate;

    @Field(() => ProgrammingQuestionMinAggregate, {nullable:true})
    _min?: ProgrammingQuestionMinAggregate;

    @Field(() => ProgrammingQuestionMaxAggregate, {nullable:true})
    _max?: ProgrammingQuestionMaxAggregate;
}
