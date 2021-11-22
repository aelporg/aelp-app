import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProgrammingQuestionType } from '../prisma/programming-question-type.enum';

@ObjectType()
export class ProgrammingQuestionMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    statementMrkdwn?: string;

    @Field(() => String, {nullable:true})
    statementCompiled?: string;

    @Field(() => ProgrammingQuestionType, {nullable:true})
    programmingQuestionType?: keyof typeof ProgrammingQuestionType;

    @Field(() => String, {nullable:true})
    singleFileProgrammingQuestionId?: string;

    @Field(() => String, {nullable:true})
    multipleFilesProgrammingQuestionId?: string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
