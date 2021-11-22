import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PracticeProgrammingQuestionWhereInput } from './practice-programming-question-where.input';

@InputType()
export class PracticeProgrammingQuestionRelationFilter {

    @Field(() => PracticeProgrammingQuestionWhereInput, {nullable:true})
    is?: PracticeProgrammingQuestionWhereInput;

    @Field(() => PracticeProgrammingQuestionWhereInput, {nullable:true})
    isNot?: PracticeProgrammingQuestionWhereInput;
}
