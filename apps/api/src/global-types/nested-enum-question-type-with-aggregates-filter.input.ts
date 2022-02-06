import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionType } from './question-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumQuestionTypeFilter } from './nested-enum-question-type-filter.input';

@InputType()
export class NestedEnumQuestionTypeWithAggregatesFilter {

    @Field(() => QuestionType, {nullable:true})
    equals?: keyof typeof QuestionType;

    @Field(() => [QuestionType], {nullable:true})
    in?: Array<keyof typeof QuestionType>;

    @Field(() => [QuestionType], {nullable:true})
    notIn?: Array<keyof typeof QuestionType>;

    @Field(() => NestedEnumQuestionTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumQuestionTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumQuestionTypeFilter, {nullable:true})
    _min?: NestedEnumQuestionTypeFilter;

    @Field(() => NestedEnumQuestionTypeFilter, {nullable:true})
    _max?: NestedEnumQuestionTypeFilter;
}
