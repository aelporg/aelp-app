import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MultipleFilesProgrammingQuestionCountAggregate } from './multiple-files-programming-question-count-aggregate.output';
import { MultipleFilesProgrammingQuestionMinAggregate } from './multiple-files-programming-question-min-aggregate.output';
import { MultipleFilesProgrammingQuestionMaxAggregate } from './multiple-files-programming-question-max-aggregate.output';

@ObjectType()
export class MultipleFilesProgrammingQuestionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    languageId!: string;

    @Field(() => MultipleFilesProgrammingQuestionCountAggregate, {nullable:true})
    _count?: MultipleFilesProgrammingQuestionCountAggregate;

    @Field(() => MultipleFilesProgrammingQuestionMinAggregate, {nullable:true})
    _min?: MultipleFilesProgrammingQuestionMinAggregate;

    @Field(() => MultipleFilesProgrammingQuestionMaxAggregate, {nullable:true})
    _max?: MultipleFilesProgrammingQuestionMaxAggregate;
}
