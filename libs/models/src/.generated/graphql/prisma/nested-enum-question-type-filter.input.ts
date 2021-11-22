import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionType } from './question-type.enum';

@InputType()
export class NestedEnumQuestionTypeFilter {

    @Field(() => QuestionType, {nullable:true})
    equals?: keyof typeof QuestionType;

    @Field(() => [QuestionType], {nullable:true})
    in?: Array<keyof typeof QuestionType>;

    @Field(() => [QuestionType], {nullable:true})
    notIn?: Array<keyof typeof QuestionType>;

    @Field(() => NestedEnumQuestionTypeFilter, {nullable:true})
    not?: NestedEnumQuestionTypeFilter;
}
