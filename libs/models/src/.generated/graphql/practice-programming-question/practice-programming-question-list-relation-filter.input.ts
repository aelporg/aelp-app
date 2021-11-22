import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionWhereInput } from './practice-programming-question-where.input';

@InputType()
export class PracticeProgrammingQuestionListRelationFilter {

    @Field(() => PracticeProgrammingQuestionWhereInput, {nullable:true})
    every?: PracticeProgrammingQuestionWhereInput;

    @Field(() => PracticeProgrammingQuestionWhereInput, {nullable:true})
    some?: PracticeProgrammingQuestionWhereInput;

    @Field(() => PracticeProgrammingQuestionWhereInput, {nullable:true})
    none?: PracticeProgrammingQuestionWhereInput;
}
